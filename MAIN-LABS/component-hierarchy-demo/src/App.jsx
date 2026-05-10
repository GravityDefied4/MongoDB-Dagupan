import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const appTitle = "React Component Lab Activity";

  const userData = [
    { name: "Alice", course: "BSIT" },
    { name: "Bob", course: "BSCS" },
    { name: "Charlie", course: "BSIT" }
  ];

  return (
    <div>
      <Header title={appTitle} />
      <MainContent users={userData} />
    </div>
  );
}

export default App;