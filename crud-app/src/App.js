import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import login from './Component/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './Component/SignUp';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={login} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route exact path="/signup" component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
