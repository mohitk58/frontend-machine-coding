import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet /> {/* ✅ This is where child routes render */}
    </div>
  );
}

export default App;
