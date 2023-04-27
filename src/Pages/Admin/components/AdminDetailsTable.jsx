import React from 'react'
import '../../../styles/startupstable.css'

const AdminDetailsTable = ({ data, handleDelete }) => {
  console.log('refr')
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
              <td width="20%"> {item.name}</td>
              <td width="20%"> {item.email}</td>
              <td width="20%"> {item.branch}</td>
              <td width="20%" onClick={() => handleDelete(item.email)}>
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
