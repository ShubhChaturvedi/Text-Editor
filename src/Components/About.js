import React from 'react'
import { useState } from 'react';

export default function About() {
    const [styleSheet, setStyleSheet] = useState({
        backgroundColor : 'white',
        color:'black'
    });

    const [enableText, setEnableText] = useState("Enable dark mode")

    let enable = ()=>{
        if(styleSheet.backgroundColor === 'white'){
            setStyleSheet({
                backgroundColor : 'black',
                color:'white'
            })
            setEnableText("Disable dark mode")
        }
        else{
            setStyleSheet({
                backgroundColor : 'white',
                color:'black'
            })
            setEnableText("Enable dark mode")
        
        }
    }




  return (
    <>
    <table className="table container my-3" style={styleSheet}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
<div className="form-check form-switch my-3 container">
  <input className="form-check-input" onClick={enable} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{enableText}</label>
</div>
    </>
  )
}
