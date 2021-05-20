import "./App.css";
import ApiFetch from "./components/ApiFetch";

function App() {
  return (
    <div className="App container">
      <h1 className="text-center mt-5">
        <a
          className="App-link"
          href="https://jsonplaceholder.typicode.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </h1>
      <p className="alert alert-primary mt-5">
        jsonplaceholderからaxiosを使用してREST apiを叩くサンプル
        <br />
        <a href="https://omathin.com/2021/02/13/react-api/">参考URL</a>
      </p>
      <ApiFetch />
    </div>
  );
}

export default App;
