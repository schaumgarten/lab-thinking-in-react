import React from 'react';

const Table = ({data}) => (
<div>
    <table>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        {data.filter(item => { return item.category === "Sporting Goods"}) }
    </table>
</div>
);

export default Table;