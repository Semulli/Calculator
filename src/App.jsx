import { useEffect } from "react";
import Main from "./Components/Main";
import Title from "./Components/Title";

function App() {
  useEffect(() => {
    document.title = "Calculator";
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Title title="Welcome" variant="introTitle" />
      <Main />
      <Title title="to calculator" variant="introTitle" />
    </div>
  );
}

export default App;
