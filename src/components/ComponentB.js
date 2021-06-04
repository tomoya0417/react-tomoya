import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ComponentB = () =>{
  const [data, setData] = useState()
  useEffect(() => {
    console.log('useEffect が呼び出されました。 ');
  
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      console.log(res)
      setData(res.data)
    })
  }, []);
  
  return(
    <div>
      <div>ComponentB</div>
      <Link to="componentc">ComponentCへ移動</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>userId</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((d, index) => {
              return (
                <tr>
                  <td>{d.id}</td>
                  <td>{d.userId}</td>
                  <td>{d.title}</td>
                  <td>{d.body.toString()}</td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
    </div>
  );
};



export default ComponentB;