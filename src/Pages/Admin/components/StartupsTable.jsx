import React,{ useState, useEffect } from 'react'
import "../../../styles/startupstable.css";
import { API } from '../../../Api/Post';
import axios from "axios";


const StartupsTable = ( {companies} ) => {
  const [data, setData] = useState([]);
  useEffect(()=> {
    console.log("line 10");
    API('get', "/admin/all-startup-details")
  .then((res) => {
    console.log(res.data);
    setData(res.data.data);
    // setOpen(true);
  })
  .catch((error) => {
    console.error(error.message)
    console.error(error)
    alert(error.response.data.message)
  })
})


  return (
    <div className="table-wrapper">
    <table>
        <tbody>
            <tr id='table-head'>
                <th>Company</th>
                <th>Status</th>
                <th>Account Status</th>
                <th>Branch</th>
                <th>Company Valuation</th>
            </tr>
            {data.map((item) => (
            <tr >
                <td width="20%"> { item.name }</td>

                <td width="13%"><span className= {
                (item.status.toLowerCase() === 'verified' ? "verified" : "") +
                (item.status.toLowerCase() === 'pending' ? "pending" : "") +
                (item.status.toLowerCase() === 'unverified' ? "unverified" : "")
                }> { item.status } </span> </td>

                <td width="35%"> 
                < progress max="100" value={ item.accountStatus } className={(item.accountStatus === '' ? 'progressFalse' : 'progressTrue')} />
                <p>{ item.accountStatus }</p>
                <span className= {
                (item.change === 'increment' ? "increment" : "") +
                (item.change === 'decrement' ? "decrement" : "") +
                (item.change === '' ? "noData" : "")
                }> { item.changeAmount } </span> </td>

                <td width="10%"> { item.branch }</td>
                <td width="22%"> { item.valuation }</td>
            </tr>
            ))}
            
        </tbody>
    </table>
    </div>
  )
}

export default StartupsTable