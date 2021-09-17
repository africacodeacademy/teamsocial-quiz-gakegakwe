import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Question from "./questions";
import Countries from "./countries";
import Movies from "./movies";
import Music from "./music";

function App() {
  let history = useHistory();
  const [error, setError] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();

    if (error === " ") {
      history.push({
        pathname: "/Questions",
      });
    } else {
      window.alert("Please Register First");
    }
  }

  function handleChange(event: any) {
    event.preventDefault();
    const { value } = event.target;

    var regex = /^[A-Za-z0-9 ]+$/;

    var isChars = regex.test(value);

    var isNum = value.match(".*\\d.*");

    if (value.length === 0) {
      setError("Your username can't be empty");
    } else if (value.length > 14) {
      setError("Your username can't be more than 14 characters");
    } else if (value.length < 2) {
      setError("Your username can't be less than 2 characters");
    } else if (!isChars) {
      setError("No special characters please");
    } else if (isNum) {
      setError("No numbers please");
    } else {
      setError(" ");
      window.localStorage.setItem("username", value);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Team Social Quiz App</h1>
      </header>
      <h3>Register</h3>
      <form>
        <input
          id="ip2"
          type="text"
          name="username"
          placeholder="Username: "
          onChange={handleChange}
        />
        <div></div>
        {error && (
          <label style={{ color: "white" }} htmlFor="username">
            {error}
          </label>
        )}
        <br></br>
        <button onClick={handleSubmit}>Start Game</button>
      </form>
      <p></p>
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
