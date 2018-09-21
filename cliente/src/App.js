import React, { Component } from 'react';
import './App.css';
//Imports
//import Formulario from './componentes/Formulario';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Papaparser from './componentes/Papaparser.js';
import Graph from './componentes/Graph.js';

class App extends Component {
  
  //State
  constructor(props){
    super(props);
    this.state= {
      //Elemento a usar dentro del state
      //Objetos de prueba
      objetos: []
      
      
    };
  }
  
  componentDidMount(){
    fetch('/getData')
/*     //Retorno del objeto JSON
    .then((res)=>res.json() )
    //Se establece el state con los objetos del json
    .then((json)=> this.setState({objetos:json}))
    //Error que se puede generar
    .catch((err) => console.log(err)); */ 
  }
  
  renderObjects(){
    //Retorno de objetos renderizados (Codigo HTML del js que estoy manejando)
    //Se retorna un div con lo que quiero mostrar
    return this.state.objetos.map((obj) => 
    //Componente
    //<Objeto key={obj.descripcion} objeto={obj}/>
    //Div
    <div key={obj.descripcion}>{obj.titulo}-{obj.descripccion} </div>
    );
  }
  
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
        <AppBar/>
      </MuiThemeProvider>
      <h1>Exam 1 Web Dev</h1>
        <div className="AppH">
        <header className="App-header">
        <h1> Welcome </h1>
        {/* Formulario de ejemplo */}
        {/* <Formulario/> */}
        <Papaparser/>
        <Graph/>
        </header></div>
        
        </div>
        );
      }
    }
    
    export default App;
    