import "./App.css";
import SyncSearch from "./components/SyncSearch";
import AsyncSearch from "./components/AsyncSearch";

function App() {
  return (
    <div className="App">
      <AsyncSearch />
      <SyncSearch />
    </div>
  );
}

export default App;
