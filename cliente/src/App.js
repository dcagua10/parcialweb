import React, { Component, Fragment } from 'react';
import './App.css';
//Imports
//import Formulario from './componentes/Formulario';
import Header from './componentes/Layouts/Header.js';
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
    return <Fragment>
    
    <div className="App">
    <Header/>
    <div className="container">
    <div className="graph1">
    <br/><h1>Grafica #1</h1>
    <br/><Papaparser/>
    </div>

    <div className="graph2">
    <br/><h1>Grafica #2</h1>
    <br/><Graph/>
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
