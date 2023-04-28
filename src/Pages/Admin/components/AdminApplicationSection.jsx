import React from 'react'
import searchIcon from "../../../assets/search-normal.svg";
import filterIcon from "../../../assets/filter-search.svg";
import "../../../styles/adminApplication.css"
import StartupsTable from "./StartupsTable"
import { useState, useEffect } from 'react';
import { Companies } from "./Companies";
import { API } from '../../../Api/Post';
import Last30Days from './Last30Days';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilters } from './filtersSlice';

const AdminApplicationSection = () => {

    const filters = useSelector(selectFilters);
    let url = "/admin/all-startup-details";
    const filtersCount = filters.length;

    if( filtersCount !== 0) {
        url+="?filters="
        filters.forEach((element, index) => {
            url+= element.value;
            if( index != filtersCount - 1) {
                url+=",";
            }
        });
    }

    const [query, setQuery ] = useState("");
    const [query2, setQuery2 ] = useState("");
    const [ tabledata, setTabledata] = useState([]);

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
                {/* <ApplicationFooter /> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default AdminApplicationSection