import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import Table from "./Table";
import data from '../data.json'

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data.data,
            fiterText: '',
            stockedOnly: false
        }
    }

    /*componentWillMount() {
        this.sortSports();
        this.sortElectronics();
    }*/

   render()     {
        /*console.log(this.sortElectronics)
        console.log(this.sortSports)*/
           return (
                <div>
                    <SearchBar/>
                    <Table products={this.state.data}/>
                </div>
            )
        }
    };


export default FilterableProductTable;

