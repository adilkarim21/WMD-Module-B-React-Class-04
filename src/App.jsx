import React from 'react'
import './App.css'
import { Data } from "./Data"
import Card from './components/Card/Card';

function App() {

  // let arr = ["adil","farooq","hamza","ali","ahmed"] || [];
  // let arr = undefined || [];


  return (
    <>
      
      {

        // arr.map((element,index) => {
        //   return <li key={index}>{element}</li>
        // })

        // arr ? ( arr.map((element,index) => {
        //   return <li key={index}>{element}</li>
        // })) : (<h1>Data not fetch!!</h1>)

        // arr && arr.map((element,index) => {
        //   return <li key={index}>{element}</li>
        // })
      
      }


      {/* <select> */}

        {

          // arr.map((element,index) => {
          //   return <option>{element}</option>
          // })

        }

      {/* </select> */}


      {Data ? ( 
          Data.map((e, i) => {
          return (
            <Card key={e.id} id={e.id} imgSRC={e.ImgSRC} title={e.title} desc={e.desc} />
          );
        })
      ) : (
        <h1>Data not fetch!!</h1>
      )}


    </>
  )
}

export default App;
