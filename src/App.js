import { HashRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Nav from './components/nav';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Figure from './components/figure';
import Footer from './components/footer';

function App() {
  return (
    <HashRouter>
      <Nav />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Portfolio} path='/portfolio' exact />
      </Switch>
      <Figure />
      <Footer />
    </HashRouter>
  );
}

export default App;
