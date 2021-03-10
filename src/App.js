import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Uploads from "./pages/Uploads"
import Authentication from "./Store/AuthContext";

import LoggedRoute from "./components/Routes/LoggedRoute";
import NotLoggedRoute from "./components/Routes/NotLoggedRoute";

import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

function App() {
  return (
    <Authentication>
      <Router>
        <QueryClientProvider client={queryClient}>
          <div className="App">
            <Route path="/" component={Home} exact />
            <NotLoggedRoute path="/login" component={Login} exact />
            <NotLoggedRoute path="/signup" component={Signup} exact />
            <LoggedRoute path="/uploads" component={Uploads} />
          </div>
        </QueryClientProvider>
      </Router>
    </Authentication>
  
  );
}

export default App;
