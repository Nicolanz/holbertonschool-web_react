import logo from './holberton_logo.jpeg';
import './App.css';
const utils = require('./utils.js');


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </div>
      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <div className="credentials">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" />
          <button>OK</button>
        </div>
      </div>
      <div className="App-footer">
        <p>
          Copyright {utils.getFullYear()} - {utils.getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;
