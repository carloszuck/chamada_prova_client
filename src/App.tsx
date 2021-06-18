import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Turmas from './pages/Turmas';
import Cadastro from './pages/Cadastro';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/turmas' component={Turmas}/>    
          <Route path='/cadastro' component={Cadastro}/>   
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
