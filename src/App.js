import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Website from './components/Website';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About}/>
            <Route path='/websites' component={Website} />
            <Route path='/contact' component={Contact} /> 
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
