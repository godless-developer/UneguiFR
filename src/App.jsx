import Header from "./components/Header";
import "./styles/header.css";
import "./style.css";
import { Search } from "./components/Search";
import Type from "./components/Type";
import Page from "./components/Page";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <div className="body">
      {/* <Header /> */}
      {/* <Search /> */}
      <div className="body-container">{/* <Type /> */}</div>
      <Calculator />
    </div>
  );
};

export default App;
