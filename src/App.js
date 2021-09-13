import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Navbar from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import About from './Components/About';

const App = () => {
  return(
    <div>
      <BrowserRouter>
      <Header />
      <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/about" exact component={About} />
       <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
     
      </BrowserRouter>
      
    </div>
  )
}

export default App;
