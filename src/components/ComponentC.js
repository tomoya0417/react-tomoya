import React, {useState, useEffect,useReducer } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import reducer from '../reducers/index';
import ComponentD from './ComponentD';

const initialCount = {
  count: 0
};

const ComponentC = () =>{
  const [data, setData] = useState()
  const [ state, dispatch ] = useReducer(reducer,initialCount);

  useEffect(() => {
    console.log('useEffect が呼び出されました。');
  })

const getData = () => {
  axios.get('http://jsonplaceholder.typicode.com/comments')
  .then(res => {
    console.log(res)
    setData(res.data)
})};


  const increment = () =>{
    console.log('increment');
    dispatch({
      type: 'INCREMENT'
    });
  };

    const decrement = () =>{
      console.log('decrenent');
      dispatch({
        type: 'DECREMENT'
      });
  };

  const recrement = () =>{
    console.log('reset');
    dispatch({
      type: 'RESET'
    });
};


  return(
    <div>
      <ComponentD />
      <div>ComponentC</div>
      <Button variant="success" onClick={getData}>getData</Button>{' '}
      <Link to="/">ComponentAへ戻る</Link>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={recrement}>reset</button>
      <h1>{state.count}</h1>
    
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