import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Overall() {
  const navigate = useNavigate();
  function ClickHandler(){
    navigate('/setting');
  }
  return (
    <div className='overall'>
      <p>Overall Stats</p>
      <input className='searchbarInput2' type="search" placeholder="Search Here" />
      <button onClick={()=> {ClickHandler()}}>Setting</button>

      <table className='tableO'>
        <tr>
          <th>Name</th>
          <th>Toal Hrs.</th>
          <th>Daily Average Hrs.</th>
        </tr>
        <tr>
          <td>SaadMushtaq</td>
          <td>160</td>
          <td>8.00</td>
        </tr>
        <tr>
          <td>HusnainMasqsood</td>
          <td>150</td>
          <td>7.5</td>
        </tr>
        <tr>
          <td>AyazAfzal</td>
          <td>140</td>
          <td>7.00</td>
        </tr>
        <tr>
          <td>ZeeshanSattar</td>
          <td>120</td>
          <td>6.00</td>
        </tr>
        <tr>
          <td>AbdulMoeez</td>
          <td>160</td>
          <td>8.00</td>
        </tr>
      </table>
    </div>
  )
}
