import React,{} from 'react';
import './App.css';
import Card from './Card';

const sampleArray= [
{ id: 1, name: 'aaa', date: 19920527 },
{ id: 2, name: 'bbb', date: 19920528 },
{ id: 3, name: 'ccc', date: 19920529 },
{ id: 4, name: 'ddd', date: 19920530 },
{ id: 5, name: 'eee', date: 19920531 },
];

function App() {
  return (
    <div>
      {sampleArray.map((data,index) =>{
        console.log(data);
        return <Card key={index} name={data.name} date={data.date} />
      })}
    </div>
  );
  }

export default App;
