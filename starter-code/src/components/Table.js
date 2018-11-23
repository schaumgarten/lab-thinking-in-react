import React, {Component} from 'react';
import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";

class Table extends Component {
    render() {
        const rows = [];
        let previousCategory = '';
        this.props.products.forEach(product => {
            if (product.category !== previousCategory){
                rows.push(<ProductCategory category={product.category}/>)
            }
            rows.push(<ProductRow product={product}/>)
            previousCategory = product.category;
        }
        );
        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {rows}
                    </table>
            </div>
        )
    }
}

export default Table;