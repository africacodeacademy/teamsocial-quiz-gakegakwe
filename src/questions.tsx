import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,

} from "react-router-dom";
import Countries from "./countries";
import Movies from "./movies";
import Music from "./music";
import App from "./App";

export function Question() {
  const username = window.localStorage.getItem("username");
  let history = useHistory();

  const handleClick = () => history.push("/");

  function handleCountry(event: any) {
    history.push({
      pathname: "/country",
    });
  }
  function handleMovies(event: any) {
    history.push({
      pathname: "/movie",
    });
  }
  function handleMusic(event: any) {
    history.push({
      pathname: "/music",
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Team Social Quiz App</h1>
      </header>

      <p>Player: {username}</p>

      <p>Select Category to start playing</p>

      <div className="button-class">
        <button onClick={handleCountry}>Countries</button>
        <button onClick={handleMovies}>Movies</button>
        <button onClick={handleMusic}>Music</button>
      </div>
      <br></br>
      <button onClick={handleClick}>Log Out</button>
      <div></div>
    </div>
  );
}
export default function router() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/Questions" exact component={Question} />
          <Route path="/country" exact component={Countries} />
          <Route path="/movie" exact component={Movies} />
          <Route path="/music" exact component={Music} />
        </Switch>
      </Router>
    </div>
  );
}
