import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ExamplePage from './pages/ExamplePage';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/example' component={ExamplePage}/>    
        <Route path='/' component={Home}/>       
      </Switch>
      <Footer />
    </>
  );
}

export default App;
