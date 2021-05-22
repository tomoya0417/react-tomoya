import React,{} from 'react';
import './App.css';
import Card from './Card';
import Table from './Table';

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
      {sampleArray.map((data, index) =>{
        console.log(data);
        return <Card key={index} id={data.id} name={data.name} date={data.date} />
      })}
     <table>
     <tr>
       <th>id</th>
       <th>name</th>
       <th>date</th>
      </tr>
    {sampleArray.map((data,index) => {
      console.log(data);
      return <Table key={index} id={data.id} name={data.name} date={data.date} />

    })}

     </table>

    </div>
  );
  }

export default App;
