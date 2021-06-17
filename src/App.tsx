import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Turmas from './pages/Turmas';
import Cadastro from './pages/Cadastro';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/turmas' component={Turmas}/>    
        <Route path='/cadastro' component={Cadastro}/>       
      </Switch>
      <Footer />
    </>
  );
}

export default App;
