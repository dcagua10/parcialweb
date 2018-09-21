import React, { Component, Fragment } from 'react';
import './App.css';
//Imports
//import Formulario from './componentes/Formulario';
import Header from './componentes/Layouts/Header.js';
import FormularioJSON from './componentes/FormularioJSON.js';
import FormularioCSV from './componentes/FormularioCSV.js';
import Review from './componentes/Review.js';

class App extends Component {
  
  //State
  constructor(props){
    super(props);
    this.state= {   
    }
  }
  
  render() {
    return <Fragment>
    
    <div className="App">
    <Header/>
    <div className="container">
    <div className="graph1">
    <br/><h1>Create your own Graph using JSON</h1>
    <FormularioJSON/>
    </div>

    <div className="graph2">
    <br/><h1>Create your own Graph using CSV</h1>
    <FormularioCSV/>
    </div>

    <div className="review">
    <br/><h1>Add a new graph review</h1>
    <Review/>
    </div>
    </div>
    
    {/* <Formulario/> */}
    {/*     <Papaparser/>
    <Graph/> */}
 
    </div> 
    
    </Fragment>
    
  }
}

export default App;
