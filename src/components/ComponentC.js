import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const ComponentC = () =>{
  const [data, setData] = useState()

  useEffect(() => {
    console.log('useEffect が呼び出されました。');
})

const getData = () => {
  axios.get('http://jsonplaceholder.typicode.com/comments')
  .then(res => {
    console.log(res)
    setData(res.data)
  })
}

  return(
    <div>
      <div>ComponentC</div>
      <Button variant="success" onClick={getData}>getData</Button>{' '}
      <Link to="/">ComponentAへ戻る</Link>
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>postId</th>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>body</th>
        </tr>
      </thead>

      <tbody>
        {
          data && data.map((d, index) => {

            return (
             <tr key={index}>
               <td>{d.postId}</td>
               <td>{d.id}</td>
               <td>{d.name}</td>
               <td>{d.email}</td>
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

export default ComponentC;