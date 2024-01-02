import "./App.css";
import { Content } from "./components/Content";
import { Day } from "./components/Day";
import { Menu } from "./components/Menu";

function App() {
  return (
    <div className="container">
      <h1>Skomponuj swój dzień jedzenia!</h1>
      <Menu></Menu>
      <Content></Content>
      <Day></Day>
    </div>
  );
}

export default App;
