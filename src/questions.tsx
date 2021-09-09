import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
  Link,
} from "react-router-dom";
import Countries from "./countries";
import Movies from "./movies";
import Music from "./music";

export default function Question() {
  const username = window.localStorage.getItem("username");

  let history = useHistory();

  const handleClick = () => history.push("/");

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1> Team Social Quiz App</h1>
        </header>

        <p>Player: {username}</p>

        <p>Select Category to start playing</p>

        <div className="button-class">
          <button>
            <Link to="/country">Countries</Link>
          </button>
          <button>
            <Link to="/movie">Movies</Link>
          </button>
          <button>
            <Link to="/music">Music</Link>
          </button>
        </div>
        <br></br>
        <button onClick={handleClick}>Log Out</button>
        <div></div>
        <Switch>
          <Route path="/country">
            <Countries />
          </Route>
          <Route path="/movie">
            <Movies />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
