import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Users from "./Users";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Users></Users>}></Route>
      </Routes>
    </div>
  );
}

export default App;
