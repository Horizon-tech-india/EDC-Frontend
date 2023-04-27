import React from 'react'
import searchIcon from "../../../assets/search-normal.svg";
import filterIcon from "../../../assets/filter-search.svg";
import "../../../styles/adminApplication.css"
import StartupsTable from "./StartupsTable"
import { useState, useEffect } from 'react';
import { Companies } from "./Companies";
import { API } from '../../../Api/Post';

const AdminApplicationSection = () => {
    const [query, setQuery ] = useState("");
    const [query2, setQuery2 ] = useState("");
    const [ tabledata, setTabledata] = useState([]);
    const [ currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limitPerPage = 6;

    function handlePageChange(page) {
        // update current page number
        setCurrentPage(page);
    }

    useEffect(() => {
        // calculate total number of pages based on rows and limit per page
        setTotalPages(Math.ceil(tabledata.length / limitPerPage));
      }, [tabledata]);

    const search = (companies) => {
        return companies.filter(item => item.name.toLowerCase().includes(query));
    }
    const search2 = (companies) => {
        return companies.filter(item => item.name.toLowerCase().includes(query));
    }

    useEffect(()=> {
        console.log("line 16");
        API('get', "/admin/all-startup-details?filters=Parul University,Vadodra Startup Studio")
      .then((res) => {
        console.log(res.data.data)
        setTabledata(res.data.data)
        console.log("application data",tabledata)
        setOpen(true)
        
      })
      .catch((error) => {
        console.error(error.message)
        console.error(error)
        console.log(error.response)
        // alert(error.response.data.message)
      })
    })

    const FilterStartupsButton = (props) => {
        return(
        <div className="filter-wrapper">
            <div className="filter-button">
                <button
                onClick={ props.onClick }>
                <img src={filterIcon} />
                <span>Filter</span>
                </button>
            </div>
        </div>
    )}

    const StatsComponent = (props) => {
        return(
            <div className="stats-box">
                <div className='stats-bg'>
                <div className="stats-box-overlay">
                    <h2>{props.data}</h2>
                    <p>{props.datatype}</p>
                </div>
            </div>
            </div>
            
    )}

    const Last30Days = () => {
        return(
            <div className="last30-wrapper">
                <div className="header-text">
                    <p>In the last 30 days</p>
                </div>
                <div className="stats-components-container">
                    <div className="applications-component">
                        <StatsComponent data="1,500" datatype="Applications" />
                    </div>
                    <div className="new-application-component">
                        <StatsComponent datatype="New application"/>
                    </div>
                    <div className="approved-applications-component">
                        <StatsComponent datatype="Approved applications"/>
                    </div>
                </div>
            </div>
        )
    }
    
    const ApplicationFooter = (props) => {

        const pageNumButtons = [];

        for (let i = 1; i <= totalPages; i++) {
        const buttonClass = i === currentPage ? 'page-num-buttons active' : 'page-num-buttons';

        pageNumButtons.push(
            <button
            // onClick={ props.numsBtn }
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
    <>
    <div className="admin-application-container">
        <div className="search-bar">
            <div className="search-wrapper">
                <img src={ searchIcon } className='search-icon' />
                <input
                className='search-input'
                type="text"
                placeholder="Search startups"
                // onChange={props.onChange}
                onChange={(e) => setQuery(e.target.value)}
                value={ query }
                />
            </div>
        </div>

        <Last30Days />

        {/*All application section */}

        <div className="all-applications-wrapper">

            <div className="all-applications-header">
                <div className="all-applications-header-left">
                    <h2>All Applications</h2>
                    <p>Approved and Pending Both</p>
                </div>
                <div className="all-applications-header-right">
                    <div className="all-applications-header-search">
                        {/* <SearchStartupsBar /> */}
                        <div className="search-bar">
                            <div className="search-wrapper">
                                <img src={ searchIcon } className='search-icon' />
                                <input
                                className='search-input'
                                type="text"
                                placeholder="Search startups"
                                // onChange={props.onChange}
                                onChange={(e) => setQuery2(e.target.value)}
                                value={ query2 }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="all-applications-header-filter">
                        <FilterStartupsButton />
                    </div>
                </div>
            </div>


            <div className="all-applications-body">
                <StartupsTable companies = { search(tabledata) }/>
                <ApplicationFooter />
            </div>
        </div>
    </div>
    </>
  )
}

export default AdminApplicationSection