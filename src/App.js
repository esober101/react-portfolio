import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Nav from './components/nav';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Figure from './components/figure';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Portfolio} path='/pages' />
      </Switch>
      <Figure />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
