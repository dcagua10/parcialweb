import React, { Component } from 'react';
import Papa from 'papaparse';
import GraphCSV from './GraphCSV.js';

//Export Default -> No tiene {}
class FormularioCSV extends Component {
    constructor(props) {
        //Aqui me pasan los props
        super(props);
        // Definicion del STATE con los datos del formulario
        this.state ={
            spec:{
                '$schema': 'https://vega.github.io/schema/vega-lite/v3.0.0-rc6.json',
                'description': 'A simple bar chart with embedded data.',
                'mark': 'bar',
                'data': {'name':'data'},
                'encoding': {
                    'y': {'field': 'date', 'type': 'ordinal'},
                    'x': {'field': 'temp', 'type': 'quantitative'}
                }
            },
            file: null
        };

        this.onChange = this.onChange.bind(this);
        this.parseInfo = this.parseInfo.bind(this);
        
    }
    
    onChange(e) 
    {
        this.setState({file:e.target.files[0]})
    }
    
    parseInfo()
    {
        Papa.parse(this.state.file, {
        download: true,
        header: true,
        complete: function(results) {
            const datos = results.data;
            console.log(datos);
            this.setState({
                data: datos,
              });
        }
    });
}

render() 
{
    return(
        <div className = "csvInput">
        <br/><input type="file" onChange={this.onChange} id="file" name="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" multiple />
        <br/><br/><button className="nav_btn"  onClick={evt=>this.parseInfo(evt)}>Generate CSV Graph</button>
        <h2>This is your graph</h2>
        <GraphCSV data={this.state.data}/>
        </div>
        );
    }
}
export default FormularioCSV;

