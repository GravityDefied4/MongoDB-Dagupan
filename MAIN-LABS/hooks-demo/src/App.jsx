import { useState, useEffect } from "react";

function App() {
  // useState Hook
  const [count, setCount] = useState(0);

  // useEffect Hook
  useEffect(() => {
    console.log("Count changed:", count);

    document.title = `Count: ${count}`;
  }, [count]);

  // Event Handlers
  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <h1>React Hooks Demo</h1>

      <div style={styles.counterBox}>
        <h2>Counter Value:</h2>
        <p style={styles.count}>{count}</p>
      </div>

      <div style={styles.buttonContainer}>
        <button onClick={increaseCount} style={styles.button}>
          Increase
        </button>

        <button onClick={decreaseCount} style={styles.button}>
          Decrease
        </button>

        <button onClick={resetCount} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },

  counterBox: {
    margin: "20px auto",
    padding: "20px",
    width: "250px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f4f4f4",
  },

  count: {
    fontSize: "40px",
    fontWeight: "bold",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },

  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default App;