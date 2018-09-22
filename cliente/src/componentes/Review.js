import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Review extends Component {
  constructor(props) {
    //Aqui me pasan los props
    super(props);
    // Definicion del STATE con los datos del formulario
    this.state ={
      first_name : '',
      last_name: '',
      description:'',
      rating: '',
      data:'',
      graphType:''
      
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
    alert(`Info: ${this.state.first_name} ${this.state.last_name} ${this.state.description} ${this.state.rating}`);
    console.log(this.state);
    //State a Json
    const data = JSON.stringify(this.state);
    console.log(data);
    fetch('/api/review',{
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: data
    }).then(res => res.json())
    .then(json => {
      if(json.success){
        console.log('Enviado');
      }
      else{
        console.log('Fallo en el JSON');
      }
    });
    event.preventDefault();
  }
  
  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
      <br/>
      
      <label>
      {/* Se hace uso de imput name para identificar la variable */}
      First Name
      <br/><input name='first_name' type='text' value={this.state.first_name} onChange={this.handleChange}/>
      </label>
      
      <br/>
      
      <label>
      Last Name
      <br/><input name='last_name' type='text' value={this.state.last_name} onChange={this.handleChange}/>
      </label>
      
      <br/>
      
      <label>
      Description
      <br/><input name='description' type='text' value={this.state.description} onChange={this.handleChange}/>
      </label>
      
      <br/>
      
      <label>
      Rate
      <br/><input name='rating' type='number' value={this.state.rating} onChange={this.handleChange}/>
      </label><br/><small>Use a Number between 0 and 5</small>
      
      <br/>
      
      <input type="submit" value="Submit" />
      
      </form>
      );
    }
  }
  //Especificacion de los tipos de Props
  Review.propTypes ={
    first_name : PropTypes.string.isRequired,
    last_name : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    rating : PropTypes.string.isRequired,
    graphType : PropTypes.string.isRequired
  };