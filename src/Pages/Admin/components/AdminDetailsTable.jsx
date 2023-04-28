import React from 'react'
import '../../../styles/startupstable.css'

const AdminDetailsTable = ({ data, handleDelete }) => {
  return (
    <div className="table-wrapper">
      <table>
        <tbody>
          <tr id="table-head">
            <th>Name</th>
            <th>Email</th>
            <th>Branch</th>
            <th></th>
          </tr>
          {data.map((item) => (
            <tr key={item.name}>
              <td width="25%"> {item.name}</td>
              <td width="25%"> {item.email}</td>
              <td width="25%"> {item.branch}</td>
              <td width="25%" onClick={() => handleDelete(item.email)}>
                {' '}
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminDetailsTable
