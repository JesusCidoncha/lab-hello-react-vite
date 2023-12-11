import "./App.css";
import logo from "./assets/ironhack-logo-xs.png";
import menuTop from "./assets/menu-top-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
function App() {
  return (
    <div className="App">
      <div id="header">
        <img src={menuTop} alt="menuTop" class="menuTop" />
        <img src={logo} alt="Logo" class="logo" />
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja web developer
        </p>
        <button>Awesome!</button>
      </div>
      <ul>
        <li>
          <img src={icon1} alt="icon" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs</p>
        </li>
        <li>
          <img src={icon2} alt="icon" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state</p>
        </li>
        <li>
          <img src={icon3} alt="icon" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component´s</p>
        </li>
        <li>
          <img src={icon4} alt="icon" />
          <h2>JSX</h2>
          <p>Statically-typed designed to run on modern browsers</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
