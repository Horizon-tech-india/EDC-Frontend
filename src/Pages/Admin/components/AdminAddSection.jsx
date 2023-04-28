import React, { useState, useEffect } from 'react'
import AdminAddForm from './AdminAddForm'
import AdminDetailsTable from './AdminDetailsTable'

const AdminAddSection = () => {
  const initialData = [
    {
      firstName: 'sam',
      lastName: 'sss',
      email: 'sam@gmail.com',
      password: 'sam@123',
      branch: 'RSS',
    },
    {
      firstName: 'anjal',
      lastName: 'sss',
      email: 'anjal@gmail.com',
      password: 'anjal@123',
      branch: 'AHSS',
    },
    {
      firstName: 'ram',
      lastName: 'sss',
      email: 'ram@gmail.com',
      password: 'ram@123',
      branch: 'Surat Branch',
    },
    {
      firstName: 'nikhil',
      lastName: 'sss',
      email: 'nikhil@gmail.com',
      password: 'nikhil@123',
      branch: 'VSS',
    },
    {
      firstName: 'parul',
      lastName: 'sss',
      email: 'parul@gmail.com',
      password: 'parul@123',
      branch: 'RSS',
    },
  ]
  const [data, setData] = useState(initialData)

  const handleDelete = (email) => {
    const filteredData = data.filter((admin) => admin.email !== email)
    setData(filteredData)
  }

  return (
    <div>
      <AdminAddForm data={data} setData={setData} />
      <AdminDetailsTable data={data} handleDelete={handleDelete} />
    </div>
  )
}

export default AdminAddSection
