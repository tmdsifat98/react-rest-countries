import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";

function App() {
  const fetchData = fetch("https://restcountries.com/v3.1/all").then((res) =>
    res.json()
  );
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
      <Countries fetchData={fetchData}></Countries>
      </Suspense>
    </>
  );
}

export default App;
