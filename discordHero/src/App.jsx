import background from './assets/d-background.png'
import logo from './assets/d-logo.png'
import menu from './assets/menu-icon.png'
import './App.css'
import './index.css'

function App() {

  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <div className="topContainer">
        <img src={logo} alt="discord logo" />
        <img src={menu} alt="menu icon" />
      </div>
      <div className="middleContainer">
        <div className="middleContent">
        <h1> IMAGINE A <br />PLACE... </h1>
        <p> ... where you can belong to a school club, a gaming group, 
          or a worldwide art community. Where just you and a handful of 
          friends can spend time togeher. A place that makes it easy to 
          talk every day and hang out more often. </p>
        </div>
      </div>
      <div className="bottomContainer">
        <button type="button" id="button1"> Download for Mac </button>
        <button type="button" id="button2"> Open Discord in your browser </button>
      </div>
    </div>
  );
}

export default App
