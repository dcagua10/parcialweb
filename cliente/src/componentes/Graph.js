import React, { Component } from 'react';
import Papa from 'papaparse';
import VegaLite from 'react-vega-lite';


export default class Graph extends Component {
    constructor(props) {
        //Props heredados
        super(props);
        //State con los valores
        this.state ={
            data: {
                "name": {"url": "data/sample.csv"}
            },
            spec:{
                'description': 'A simple bar chart with embedded data.',
                'mark': 'bar',
                'encoding': {
                    'x': {'field': 'a', 'type': 'ordinal'},
                    'y': {'field': 'b', 'type': 'quantitative'}
                }
            }
        };
        
        //Binding Here
        this.parser = this.parser.bind(this);
    }
    
    
    parser(){
        Papa.parse('data/sample.csv', {
        download: true,
        header: true,
        complete: function(results) {
            const daticos = results.data;
            console.log(daticos);
            this.setState({data:{values:daticos}});
        }.bind(this)
    });
}

componentDidMount() {
    this.parser();
    console.log(this.state.data);
}



render() {
    return <VegaLite spec={this.state.spec} data={this.state.data}/>;
    
}
}
