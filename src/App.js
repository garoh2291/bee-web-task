import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { HeaderLayout } from "./Layout/Header";
import { RoutesComponents } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderLayout />
        <RoutesComponents />
      </div>
    </BrowserRouter>
  );
}

export default App;
