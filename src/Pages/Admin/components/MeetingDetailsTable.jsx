import React, { useState, useEffect } from 'react'

const MeetingDetailsTable = ({ data }) => {
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
            <th>Title</th>
            <th>Time (IST)</th>
            <th>Members</th>
            <th>Link</th>
            <th></th>
          </tr>
          {currentRows.map((item) => (
            <tr>
              <td width="20%">{item.title}</td>
              <td width="10%"> {item.time}</td>
              <td width="25%"> {item.members}</td>
              <td width="30%"> {item.link}</td>
              <td width="15%">
                {' '}
                <button
                  onClick={() => navigator.clipboard.writeText(item.link)}
                  className="copy-link-btn"
                >
                  Copy link
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ApplicationFooter />
    </div>
  )
}

export default MeetingDetailsTable
