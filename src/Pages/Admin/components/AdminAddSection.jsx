import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import searchIcon from '../../../assets/search-normal.svg'
import FilterStartupsButton from './FilterStartupsButton'
import AdminDetailsTable from './AdminDetailsTable'
import AdminAddForm from './AdminAddForm'
import DataTable from './DataTable'
import { API } from '../../../Api/Post'

const AdminAddSection = () => {
  const { state } = useContext(AuthContext)
  const initialData = [
    {
      firstName: 'sam',
      lastName: 'sss',
      email: 'sam@gmail.com',
      phoneNumber: '5563278335',
      password: 'sam@123',
      branch: 'Rajkot Startup Studio',
    },
    {
      firstName: 'anjal',
      lastName: 'sss',
      email: 'anjal@gmail.com',
      phoneNumber: '5563278335',
      password: 'anjal@123',
      branch: 'Ahembdabad Startup Studio',
    },
    {
      firstName: 'ram',
      lastName: 'sss',
      email: 'ram@gmail.com',
      phoneNumber: '5563278335',
      password: 'ram@123',
      branch: 'Surat Startup Studio',
    },
    {
      firstName: 'nikhil',
      lastName: 'sss',
      email: 'nikhil@gmail.com',
      phoneNumber: '5563278335',
      password: 'nikhil@123',
      branch: 'Valsad Startup Studio',
    },
    {
      firstName: 'parul',
      lastName: 'sss',
      email: 'parul@gmail.com',
      phoneNumber: '5563278335',
      password: 'parul@123',
      branch: 'Rajkot Startup Studio',
    },
  ]
  const [tableData, setTableData] = useState(initialData)

  const handleDelete = (email) => {
    API('get', `admin/delete-admin?email=${email}`, {}, state.token)
      .then((res) => {
        console.log(res.data.data)
        setTableData(res.data.data)
        console.log('application data', tabledata)
        // setOpen(true)
        const filteredData = tableData.filter((admin) => admin.email !== email)
        setTableData(filteredData)
      })
      .catch((error) => {
        console.error(error.message)
        console.error(error)
        //console.log(error.response)
        // alert(error.response.data.message)
      })
  }

  useEffect(() => {
    API('get', 'admin/get-all-admin', {}, state.token)
      .then((res) => {
        console.log(res.data.data)
        setTableData(res.data.data)
        console.log('application data', tabledata)
        // setOpen(true)
      })
      .catch((error) => {
        console.error(error.message)
        console.error(error)
        //console.log(error.response)
        // alert(error.response.data.message)
      })
  }, [])

  return (
    <div>
      <AdminAddForm data={tableData} setData={setTableData} />
      <div className="all-applications-wrapper">
        <div className="all-applications-header">
          <h2>All Admin</h2>
        </div>

        <div className="all-applications-body">
          {/* <AdminDetailsTable
            companies={data}
            data={data}
            handleDelete={handleDelete}
          /> */}
          <DataTable data={tableData} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  )
}

export default AdminAddSection
