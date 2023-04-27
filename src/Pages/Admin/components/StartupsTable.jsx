import React,{ useState, useEffect } from 'react'
import "../../../styles/startupstable.css";
import { API } from '../../../Api/Post';
import axios from "axios";


const StartupsTable = ( {companies} ) => {
    const [ currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limitPerPage = 6;
    const start = (currentPage - 1) * limitPerPage;
    const end = currentPage * limitPerPage;
    const currentRows = companies.slice(start, end);
   
    // calculating total number of pages from the filtered table rows
    useEffect(() => {
      setTotalPages(Math.ceil(companies.length / limitPerPage));
    }, [companies]);

    function handlePageChange(page) {
      setCurrentPage(page);
    }

    const ApplicationFooter = (props) => {

    const pageNumButtons = [];

      for (let i = 1; i <= totalPages; i++) {
        const buttonClass = i === currentPage ? 'page-num-buttons active' : 'page-num-buttons';

        pageNumButtons.push(
          <button
          className={ buttonClass }
          onClick={() => handlePageChange(i) }
          > {i}
          </button>
        )
      }

      return (
        <div className="all-applications-footer">
          <div className="previous-page"
            onClick={()=> handlePageChange(currentPage - 1) }>
            Previous page
          </div>
          <div className="page-nums">
            { pageNumButtons }
          </div>
          <div className="next-page"
            onClick={ ()=> handlePageChange(currentPage - 1) }>
            Next Page
          </div>
        </div>
    )}
    
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
          {currentRows.map((item) => (
            <tr >
              <td width="20%"> { item.name } </td>

              <td width="13%"><span className= {
                (item.status.toLowerCase() === 'verified' ? "verified" : "") +
                (item.status.toLowerCase() === 'pending' ? "pending" : "") +
                (item.status.toLowerCase() === 'unverified' ? "unverified" : "")
                }> { item.status } </span> 
              </td>

              <td width="35%"> 
                < progress max="100" value={ item.accountStatus } className={(item.accountStatus === '' ? 'progressFalse' : 'progressTrue')} />
                <p>{ item.accountStatus }</p>
                <span className= {
                (item.change === 'increment' ? "increment" : "") +
                (item.change === 'decrement' ? "decrement" : "") +
                (item.change === '' ? "noData" : "")
                }> { item.changeAmount } </span> 
              </td>

              <td width="10%"> { item.branch }</td>
              <td width="22%"> { item.valuation }</td>
            </tr>
            ))}
            
        </tbody>
      </table>
      <ApplicationFooter />
    </div>
  )
}

export default StartupsTable;