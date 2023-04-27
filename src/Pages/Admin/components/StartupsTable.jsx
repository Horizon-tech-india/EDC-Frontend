import React from 'react'
import "../../../styles/startupstable.css";

const StartupsTable = ( {companies} ) => {
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
            <tr key={ item.id }>
                <td width="20%"> { item.name }</td>

                <td width="15%"><span className= {
                (item.status.toLowerCase() === 'verified' ? "verified" : "") +
                (item.status.toLowerCase() === 'pending' ? "pending" : "") +
                (item.status.toLowerCase() === 'unverified' ? "unverified" : "")
                }> { item.status } </span> </td>

                <td width="35%"> 
                < progress max="100" value={ item.accountStatus } className={(item.accountStatus === '' ? 'progressFalse' : 'progressTrue')} />
                <p>{ item.accountStatus }</p>
                <span className= {
                (item.accountStatusChange[0] === 'increment' ? "increment" : "") +
                (item.accountStatusChange[0] === 'decrement' ? "decrement" : "") +
                (item.accountStatusChange[0] === '' ? "noData" : "")
                }> { item.accountStatusChange[1] } </span> </td>

                <td width="10%"> { item.branch }</td>
                <td width="20%"> { item.valuation }</td>
            </tr>
            ))}
            
        </tbody>
    </table>
    </div>
  )
}

export default StartupsTable