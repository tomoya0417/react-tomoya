import React from 'react'
import { Link } from 'react-router-dom';

const ComponentC = () =>{
  return(
    <div>
      <div>ComponentC</div>
      <Link to="/">ComponentAへ戻る</Link>
    </div>
  );
};



export default ComponentC;