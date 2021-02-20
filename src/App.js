import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import {Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Kontak from './components/pages/Kontak';
import Details from './components/pages/Details';
import Kosong from './components/pages/Kosong';

class App extends Component{
  render() {
    return (
      <div>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/news" component={News}/>
            <Route path="/kontak" component={Kontak}/>
            <Route path="/details" component={Details}/>
            <Route component={Kosong}/>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
