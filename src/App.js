import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Products from './pages/Products';
import Books from './components/Books';
import Shoes from './components/Shoes';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path="/about" component={About} />
      {/* <Route path="/about" render={(props) => <About {...props} />}/> */}
      {/* <Route path='/about'>
        <About />
      </Route>  Bad practice*/}
      <Route path="/products/books" component={Books} />
      <Route path="/products/shoes" component={Shoes} />
      <Route path="/products" component={Products} />
      <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
