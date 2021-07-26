import React, {useState, useEffect} from 'react';
import './style/style.scss';
import Congratulations from './components/Congratulations'
import Card from './components/Card';


function App() {
  const [data, changeData] = useState([]);

  useEffect(()=>{
    fetch('app/data.json').then(result => {
      return result.json()
    }).then(data => {
      changeData(data)
    }) 
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center my-3">Надя с днем рождения!</h1>
      </header>
      <Congratulations/>
      <h2 className="text-center py-3">
        Хотим подарить список стихотворений прочитанных Голышевой Надей   
      </h2>
      {
        data.length > 0 ?data.map( (e, index)=> <Card data={e} key={index}/>) : ''
      }
    </div>
  );
}

export default App;
