import { Route, Switch } from 'react-router';
import './App.css';
import Home from './views/Home';
import Products from './views/Products';
import Contact from './views/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path='/' render={(props) => <Home {...props} /> } />
          <Route path="/products" component={Products}/>
          <Route path="/contact" component={Contact}/>
          {/* <Route path="/contact">
            <Contact />
          </Route> */}
      </Switch>
    </div>
  );
}

export default App;
