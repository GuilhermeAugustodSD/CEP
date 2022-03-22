import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Form from './Components/Form';
import imagem from './fundo_manejebem.jfif';

function App() {

  

  return (
    <div className="Container">
      <Header/>
      <img className="fundo" src={imagem}/>
      <Form />
      <Footer/>
    </div>
  );
}

export default App;
