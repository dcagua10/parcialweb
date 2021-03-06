import React, { Component } from 'react';
import vegaEmbed from 'vega-embed';


class Graph extends Component {
    constructor(props) 
    {
        //Props heredados
        super(props);
        //State con los valores
        this.state ={
            spec:{
                "$schema": "https://vega.github.io/schema/vega-lite/v3.0.0-rc6.json",
                'description': 'A simple bar chart with embedded data.',
                data: {
                    "name": "data"
                },
                'mark': 'bar',
                'encoding': {
                    'x': {'field': 'a', 'type': 'ordinal'},
                    'y': {'field': 'b', 'type': 'quantitative'}
                }
            }
        }
        //Binding Here
        this.click = this.onClick.bind(this);
    }

        onClick(any)
        {
        this.setState({data:this.props.data});
        vegaEmbed(this.div, this.state.spec)
        .catch(err => console.log(err))
              .then((res) =>  res.view.insert("data", this.state.data).run());
        }
      
        componentWillReceiveProps()
        {
        this.setState({data:this.props.data});
        vegaEmbed(this.div, this.state.spec)
        .catch(err => console.log(err))
              .then((res) =>  res.view.insert("data", this.props.data).run());
        }
      
        render() 
        {
          return (
            <div>
            <div ref={(div) => this.div=div}></div>
            </div>
          );
        }
    }


export default Graph;


