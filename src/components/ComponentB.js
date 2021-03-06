import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { ADD_EVENT, ALL_DELETE, DELETE} from '../actions/index';
import reducer from '../reducers/index';
import { Button, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentF from './ComponentF';
import { Store } from '../store/index';


const ComponentB = () =>{
  const [ state, dispatch ] = useReducer(reducer, []);
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');
  const [ comment, setComment ] = useState('');


  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_EVENT,
      title,
      body,
      comment
});

setTitle('');
setBody('');
setComment('');
};

const deleteClick = (e) => {
  e.preventDefault();
    dispatch({
    type: ALL_DELETE,
    title,
    body 
});
setTitle('');
setBody('');
setComment('');
};
  
return (
  <div>
  <div>ComponentB</div>
  <Link to="componentc">ComponentCへ移動</Link>
  <ComponentF />
<Form>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Title</Form.Label>
    <Form.Control
      type="text"
      placeholder="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
 />
 <Form.Label>Body</Form.Label>
 <Form.Control
   type="text"
   placeholder="body"
   value={body}
   onChange={(e) => setBody(e.target.value)}
 />
 <Form.Label>Comment</Form.Label>
 <Form.Control
   type="text"
   placeholder="comment"
   value={comment}
   onChange={(e) => setComment(e.target.value)}
 />
 </Form.Group>
  <Button variant="primary" onClick={handleClick}>
    イベント作成
  </Button>
  <Button variant="danger" onClick={deleteClick}>
    イベント全削除
  </Button>
 </Form>

 <h1>Table</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>body</th>
          <th>comment</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        {state.map((data, index) => {
         const handleClick2 = () => {
            dispatch({
              type: DELETE,
              id: data.id
            })
         } 
          return (
            <tr key={index}>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.body}</td>
            <td>{data.comment}</td>
            <td>
                <Button variant="danger" onClick={handleClick2}>削除</Button>
            </td>
          </tr>
        )
      })}
    </tbody>
  </Table>
   </div>
  );
};

export default ComponentB;