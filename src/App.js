import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
      </div>
    </Router>
  );
}

export default App;
