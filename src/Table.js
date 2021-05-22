import React from 'react'
import './Table.css'

const Table = (props) => {
  console.log(props)
  return(
    
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.date}</td>
    </tr>  

  );
};

export default Table;