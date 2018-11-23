import React from 'react';

const ProductRow = (props) => (

<tr>
    <td style={props.product.stocked ? {color:'black'}:{color:'red'} }>{props.product.name}</td>
    <td style={props.product.stocked ? {color:'black'}:{color:'red'} }>{props.product.price}</td>
</tr>
);
export default ProductRow
