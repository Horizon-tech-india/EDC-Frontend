import React, { useState, useEffect } from 'react'

const AdminDetailsTable = ({ data, handleDelete }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const limitPerPage = 6
  const start = (currentPage - 1) * limitPerPage
  const end = currentPage * limitPerPage
  const currentRows = data.slice(start, end)

  // calculating total number of pages from the filtered table rows
  useEffect(() => {
    setTotalPages(Math.ceil(data.length / limitPerPage))
  }, [data])

  function handlePageChange(page) {
    setCurrentPage(page)
  }

  const ApplicationFooter = (props) => {
    const pageNumButtons = []

    for (let i = 1; i <= totalPages; i++) {
      const buttonClass = i === currentPage ? 'active' : ''

      pageNumButtons.push(
        <button className={buttonClass} onClick={() => handlePageChange(i)}>
          {' '}
          {i}
        </button>,
      )
    }

    return (
      <div className="all-applications-footer">
        <div className="previous-page">
          {/* onClick={()=> handlePageChange(currentPage - 1) }
            Previous page */}
          <button
            className="prev-page-btn"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous page
          </button>
        </div>
        <div className="page-nums">{pageNumButtons}</div>
        <div className="next-page">
          {/* onClick={ ()=> handlePageChange(currentPage - 1) }
            Next Page */}
          <button
            className="next-page-btn"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next page
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="table-wrapper">
      <table>
        <tbody>
          <tr id="table-head">
            <th>Name</th>
            <th>Email</th>
            <th>Phone no.</th>
            <th>Branch</th>
            <th>Action</th>
          </tr>
          {currentRows.map((item) => (
            <tr>
              <td width="20%">
                {' '}
                {item.firstName} {item.lastName}{' '}
              </td>
              <td width="30%"> {item.email}</td>
              <td width="20%"> {item.phoneNumber}</td>
              <td width="20%"> {item.branch}</td>

              <td width="10%">
                <button className="table-delete-btn" onClick={() => handleDelete(item.email)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ApplicationFooter />
    </div>
  )
}

export default AdminDetailsTable
