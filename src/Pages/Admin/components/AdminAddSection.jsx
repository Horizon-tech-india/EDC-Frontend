import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import AdminAddForm from './AdminAddForm'
import DataTable from './DataTable'
import { API } from '../../../Api/Post'
import Spinner from '../../../components/Layout/Spinner'

const AdminAddSection = () => {
  const { state } = useContext(AuthContext)
  const [tableData, setTableData] = useState(null)

  const handleDelete = (email) => {
    API('get', `admin/delete-admin?email=${email}`, {}, state.token)
      .then((res) => {
        //console.log(res.data.data)
        setTableData(res.data.data)
        //console.log('application data', tabledata)
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
        //console.log(res.data.data)
        setTableData(res.data.data)
        //console.log('application data', tabledata)
        // setOpen(true)
      })
      .catch((error) => {
        console.error(error.message)
        console.error(error)
      })
  }, [])

  return (
    <div>
      <AdminAddForm data={tableData} setTableData={setTableData} />
      <div className="all-applications-wrapper">
        <div className="all-applications-header">
          <h2>All Admin</h2>
        </div>

        <div className="all-applications-body">
          {tableData ? <DataTable data={tableData} handleDelete={handleDelete} /> : <Spinner />}
        </div>
      </div>
    </div>
  )
}

export default AdminAddSection
