import React, { Component } from 'react';
import Graph from './Graph.js';

//Export Default -> No tiene {}
class FormularioJSON extends Component {
  constructor(props) {
    //Aqui me pasan los props
    super(props);
    // Definicion del STATE con los datos del formulario
    this.state ={
      jsonStr : '',
    };

     //Event Handlers: Le dicen a React como usar los datos
    this.handleChange = this.handleChange.bind(this);
  }

  //Se hace el llamado cuando tiene un input
  handleChange(event) {
    // Actualizamos el State cuando hay cambios
    const value = event.target.value;
    let valido;
    try
    {
      valido = JSON.parse(value);
    }
    catch(err)
    {
      if (err instanceof SyntaxError)
      {
        console.log("Error de sintaxis en el JSON");
      }
      else
      {
        console.log("Tiene el siguiente error: " + err);
      }
    }

    this.setState({
      jsonToStr:valido
    });
  }

  render() 
  {
    return(
    <div className = "TextArea">
    <h2>Put your JSON input</h2>
    <textarea onChange={(err)=>this.handleChange(err)} 
    value={JSON.stringify(this.state.jsonStr,null,2)}
    name='inputJSON'
    cols="30"
    rows="10"></textarea>
    <h2>This is your graph</h2>
    <Graph data={this.state.jsonStr}/>
    </div>
    );
  }
}

export default FormularioJSON;
