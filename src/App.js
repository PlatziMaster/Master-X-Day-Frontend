import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/global.scss";
import Header from "./components/header";
import Target from "./components/Target";

function App() {
  return (
    <div className="container">
      <Header />
      <Target />
    </div>
  );
}

export default App;
