import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Create from './Create'
import BlogDetails from './BlogDetails';
import Contact from './Contact'
import NotFound from './NotFound';
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">      
      <Switch >
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/create">
          <Create></Create>
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails></BlogDetails>
        </Route>
        <Route path="/contact">
        <Contact></Contact>
        </Route>
        <Route>
          <NotFound path = '*'>

          </NotFound>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>

  );
}

export default App;