import Navbar from "./components/navbar/navbar";
import Home from "./containers/home/home";
import Favorites from "./containers/favorites/favorites";

import "./App.css";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
