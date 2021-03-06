import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const defaultHistory = createBrowserHistory();

const {
  REACT_APP_DOGS_HOST: dogsHost,
  REACT_APP_CATS_HOST: catsHost,
} = process.env;

function Header() {
  return (
    <div className="banner">
      <h4>Random pics of cats</h4>
      <Link to="/cat/">Home </Link>  <br />
      <Link to="/cat/test1"> Test 1</Link> <br />
      <Link to="/cat/test2"> Test 2</Link> <br />
      <Link to="/inside"> Inside </Link> <br />
      <Link to="/dog"> Dog </Link> <br />
      <Link to="/dogtest"> Dog Link 2</Link>
       
    </div>
  );
}

function Dogs({ history }) {
  return <MicroFrontend history={history.location} host={dogsHost} name="Dogs" />;
}

function Cats({ history }) {
  return <MicroFrontend history={history} host={catsHost} name="Cats" />;
}

function GreetingCat({ history }) {
  return (
      <div className="home">
        <MicroFrontend history={history} host={catsHost} name="Cats" />
      </div>
    
  );
}

function testCat({ history }) {
  return (
      <div className="test">
        <MicroFrontend history={history} host={catsHost} name="Cats" />
      </div>
  );
}

function Home({ history }) {
  const [input, setInput] = useState("");

  const handleOnClick = () => {
    history.push(`/cat/${input}`);
  };

  return (
    <div>
      <div className="home">
        <input
          placeholder="Insert a greeting"
          defaultValue={input}
          onBlur={(e) => setInput(e.target.value)}
        />
        <button onClick={handleOnClick}>Greet Me</button>
      </div>

      <div className="home">
        <div className="content">
          <div className="cat">
            <Cats />
          </div>
          <div className="dog">
            <Dogs />
          </div>
        </div>
      </div>
    </div>
  );
}
//MAIN APP 
function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
      <Header />
        <Switch>
          <Route exact path="/cat/" component={testCat} />
          <Route exact path="/cat/test1" component={testCat} />
          <Route exact path="/cat/test2" component={testCat} />
          <Route exact path="/inside" component={Inside} />
          <Route exact path="/dog" component={Dogs} />
          <Route exact path="/dogtest" component={Dogs} />

          {/* <Route exact path="/cat/:greeting" component={GreetingCat} /> */}
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

const Inside = () => {
  return ( <h2>Inside component of Main App ..</h2>)
}

export default App;
