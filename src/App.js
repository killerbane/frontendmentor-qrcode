import logo from "./image-qr-code.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-white-card">
        <div className="App-main">
          <img src={logo} className="App-logo" alt="logo" />
          <p class="App-text">
            Improve your front-end skills by building projects
          </p>
          <p class="App-text-small">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
