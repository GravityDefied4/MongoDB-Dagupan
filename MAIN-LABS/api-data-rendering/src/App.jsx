import { useEffect, useState } from 'react'
import DataList from './components/DataList'
import Loader from './components/Loader'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        return response.json()
      })
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="container">
      <h1>API Data Rendering Lab</h1>

      {loading && <Loader />}

      {error && <p className="error">{error}</p>}

      {!loading && !error && <DataList users={users} />}
    </div>
  )
}

export default App