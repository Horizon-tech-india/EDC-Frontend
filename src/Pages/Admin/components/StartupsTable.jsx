import React,{ useState, useEffect } from 'react'
import "../../../styles/startupstable.css";
import { API } from '../../../Api/Post';
import axios from "axios";


const StartupsTable = ( {companies} ) => {
    // const limitPerPage = 6;
    // const start = (currentPage - 1) * limitPerPage;
    // const end = currentPage * limitPerPage;
    // const currentRows = companies.slice(start, end);
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
            {companies.map((item) => (
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