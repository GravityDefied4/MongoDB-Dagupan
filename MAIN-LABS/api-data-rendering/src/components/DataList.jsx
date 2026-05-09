function DataList({ users }) {
  return (
    <div className="card-container">
      {users.map((user) => (
        <div className="card" key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Company: {user.company.name}</p>
        </div>
      ))}
    </div>
  )
}

export default DataList