import React, { Component } from 'react';
import './ReviewList.css';

class ReviewList extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      ReviewList : [
        {first_name:"Camilo" ,last_name:'Useche',description:'Great Job',rating:5,data:'',graphType:'JSON'},
        {first_name:"Orlando" ,last_name:'Sabogal',description:'Great Job',rating:5,data:'',graphType:'JSON'},
        {first_name:"Zulma" ,last_name:'Castaneda',description:'Great Job',rating:5,data:'',graphType:'CSV'}
      ]
    };

    this.renderImage = this.renderImage.bind(this);
  }
  
  componentDidMount(){
    fetch('/getReview/all')
      .then((res) => {
        return res.json();
      })
      .then((json) => this.setState({ReviewList:json}))
      .catch((err) => console.log(err));
  }

  renderImage(obj){
    if(!obj.image){
      return '/images/viz_default.png';
    }
    else{
      return obj.image;
    }
  }

  onSubmit()
  {
    alert('Este metodo deberia cargar la visualizacion del Usuario al dar click al boton');
  }
  
  renderObjects() {
    return this.state.ReviewList.map((obj) => 
    // <Objeto objeto={obj}/>
      <div className="card" key={obj.first_name}>
        <img src={this.renderImage(obj)} alt="VizImage"/>
        <div className="container">
          <h4>{obj.first_name} {obj.last_name}</h4>
          <p><b>Viz Type:</b> {obj.graphType}</p>
          <p><b>Rating:</b> {obj.rating}</p> 
          <p><b>Description:</b><br/> {obj.description}</p>
          <button type="button" onClick={e=>this.onSubmit(e)}>Show</button><br/>
        </div>
      </div>
    );
  }
  
  render()
  {
    return (
      <div className="customContainer">
        {
          <div className="grid-container">
            {this.renderObjects()}
          </div>
        }
      </div>
    );
  }
}
  
export default ReviewList;