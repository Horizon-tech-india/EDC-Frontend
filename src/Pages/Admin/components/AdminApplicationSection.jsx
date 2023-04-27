import React from 'react'
import searchIcon from "../../../assets/search-normal.svg";
import filterIcon from "../../../assets/filter-search.svg";
import "../../../styles/adminApplication.css"
import StartupsTable from "./StartupsTable"
import { useState } from 'react';
import { Companies } from "./Companies";
const AdminApplicationSection = () => {
    const [query, setQuery ] = useState("");
    const search = (companies) => {
        return companies.filter(item => item.name.toLowerCase().includes(query));
    }

    const SearchStartupsBar = (props) => {
        return(
        <div className="search-bar">
            <div className="search-wrapper">
                <img src={ searchIcon } className='search-icon' />
                <input
                className='search-input'
                type="text"
                placeholder="Search startups"
                // onChange={props.onChange}
                onChange={(e) => setQuery(e.target.value)}
                value={props.value}
                />
            </div>
        </div>
        )
    }

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

    const NumButtons = ( props ) => {
        return (
        <button
        onClick={ props.numsBtn }
        > { props.pageNum }
        </button>
    )}
    const ApplicationFooter = (props) => {
        return (
        <div className="all-applications-footer">
            <div className="previous-page"
            onClick={ props.prevPage }>
                Previous page
            </div>
            <div className="page-nums">
            <NumButtons pageNum = '1' />
            <NumButtons pageNum = '2' />
            <NumButtons pageNum = '3' />
            <NumButtons pageNum = '4' />
            <NumButtons pageNum = '5' />
            <NumButtons pageNum = '6' />
            <NumButtons pageNum = '7' />
            </div>
            <div className="next-page"
            onClick={ props.nextPage }>
                Next Page
            </div>
        </div>
    )}

    const AllApplicationSection = () => {
        return(
        <div className="all-applications-wrapper">

            <div className="all-applications-header">
                <div className="all-applications-header-left">
                    <h2>All Applications</h2>
                    <p>Approved and Pending Both</p>
                </div>
                <div className="all-applications-header-right">
                    <div className="all-applications-header-search">
                        <SearchStartupsBar />
                    </div>
                    <div className="all-applications-header-filter">
                        <FilterStartupsButton />
                    </div>
                </div>
            </div>

            <div className="all-applications-body">
                <StartupsTable companies = { search(Companies) }/>
               <ApplicationFooter />
            </div>
        </div>
        )
    }
  return (
    <>
    <div className="admin-application-container">
    <SearchStartupsBar />
    <Last30Days />
    <AllApplicationSection />
    </div>
    
    </>
  )
}

export default AdminApplicationSection