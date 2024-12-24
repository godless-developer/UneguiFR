import Header from "./components/Header";
import "./styles/header.css";
import "./style.css";
import { Search } from "./components/Search";
import Type from "./components/Type";

const App = () => {
  return (
    <div className="body">
      <Header />
      <Search />
      <div className="body-container">
      <Type />
      </div>
    </div>
  );
};

export default App;
