import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Profile from './Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          This is the home page
        </Route>
        <Route path="/search">
          This is the search page
        </Route>
        <Route path="/profile/:id">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
