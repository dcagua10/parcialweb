import React, { Component } from 'react';
import Papa from 'papaparse';
import Graph from './Graph.js';

//Export Default -> No tiene {}
class FormularioCSV extends Component {
    constructor(props) {
        //Aqui me pasan los props
        super(props);
        // Definicion del STATE con los datos del formulario
        this.state ={
            data: {values:[{date:'2018/05/21', temp:100},{date:'2018/05/22', temp:99}]},
            spec:{
                'description': 'A simple bar chart with embedded data.',
                'mark': 'bar',
                'encoding': {
                    'x': {'field': 'date', 'type': 'ordinal'},
                    'y': {'field': 'temp', 'type': 'quantitative'}
                }
            }
        };
        
        //Binding here
        this.parser = this.parser.bind(this);
    }
    parser(archivo)
    {
        Papa.parse(archivo, {
        download: true,
        header: true,
        complete: function(results) {
            const datos = results.data;
            console.log(datos);
            this.setState({data:{values:datos}});
        }.bind(this)
    });
   }

   setData(e)
   {
       var input = document.querySelector('#file');
       var inputJSON = this.parser(input);
       this.state.data = inputJSON;
   }



render() 
{
    return(
        <div className = "csvInput">
        <br/><input type="file" id="file" name="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" multiple />
        <br/><br/><button className="nav_btn"  onClick={e=>this.setData(e)}>Generate CSV Graph</button>
        <h2>This is your graph</h2>
        <Graph data={this.state.data}/>
        </div>
        );
}
}
export default FormularioCSV;

