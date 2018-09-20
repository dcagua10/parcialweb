import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Export Default -> No tiene {}
export default class Formulario extends Component {
  constructor(props) {
    //Aqui me pasan los props
    super(props);
    // Definicion del STATE con los datos del formulario
    this.state ={
      nombre : '',
      apellido: ''
    };

     //Event Handlers: Le dicen a React como usar los datos
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Se hace el llamado cuando tiene un input
  handleChange(event) {
    // Actualizamos el State cuando hay cambios
    const value = event.target.value;
    this.setState({
      [event.target.name]: value
    });
  }

  handleSubmit(event) {  
    // Metodo que se ejecuta cuando se envia el formulario
    alert(`Te llamas: ${this.state.nombre} ${this.state.apellido}`);
    event.preventDefault();
  }

  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
          <label>
            {/* Se hace uso de imput name para identificar la variable */}
            Nombre
            <input name='nombre' type='text' value={this.state.nombre} onChange={this.handleChange}/>
          </label>

          <br/>

          <label>
            Apellido
            <input name='apellido' type='text' value={this.state.apellido} onChange={this.handleChange}/>
          </label>

          <br/>
          
          <input type="submit" value="Enviar" />
        
        </form>
    );
  }
}

//Especificacion de los tipos de Props
Formulario.propTypes ={
  nombre : PropTypes.string.isRequired,
  apellido : PropTypes.string.isRequired,
};
