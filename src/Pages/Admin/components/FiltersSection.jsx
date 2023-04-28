import React, { useState } from 'react';
import {Button, styled} from '@mui/material';
import Last30Days from './Last30Days';
import "../../../styles/filtersection.css"
import AddIcon from '@mui/icons-material/Add';
import filterIcon from "../../../assets/filter-search.svg";
import { useSelector, useDispatch } from 'react-redux';
import { addFilter, removeFilter, selectFilters } from './filtersSlice';

const FiltersSection = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedId, setSelectedId] = useState(0);
    const [filterValue, setFilterValue] = useState('');
    const filters = useSelector(selectFilters);
    const dispatch = useDispatch();

    const AddFiltersBtn = styled(Button)({
        padding:'12px 12px',
        fontSize: 15,
        fontFamily: 'Open sans',
        fontWeight:600,
        textTransform: 'none',
        letterSpacing: 0.7,
        borderRadius: 7,
        backgroundColor: '#B4CD93',
        '&:hover': {
            backgroundColor: '#A2B884',
            boxShadow: 'none',
          },
    })
    // console.log(filters);

    const options = [
        { label: 'Company', value: 'Company' },
        { label: 'Branch', value: 'Branch' },
        { label: 'Status', value: 'Status' },
      ];

    //   let url = "/admin/all-startup-details";
    //   const filtersCount = filters.length;
  
    //   if( filtersCount !== 0) {
    //       url+="?filters="
    //       filters.forEach((element, index) => {
    //           url+= element.value;
    //           if( index != filtersCount - 1) {
    //               url+=",";
    //           }
    //       });
    //   }
    //   console.log(url);


    const handleAddFilter = () => {
        const AddValues = (selectedOption !== "" && filterValue !== "");
        ( AddValues ? setSelectedId(selectedId + 1) : "" )
        const newFilter = {
            id: selectedId,
            option: selectedOption,
            value: filterValue,
        };

        ( AddValues ? dispatch(addFilter(newFilter)) : "");
        setSelectedOption('');
        setFilterValue('');
    };

    console.log(filters);
    const handleRemoveFilter = (filterToRemove) => {
        dispatch(removeFilter(filterToRemove));
    };

  return (
    <>
    <div className="filter-page-container">
    < Last30Days />
    <div className="filters-sec-container">
        <div className="input-filters-wrapper">
            <div className="input-filters-header">
                <h2>Add a filter</h2>
            </div>
            <div className="input-filter-fields">
                <img src={ filterIcon } className='filter-icon' />
                <div className="select-class-field">
                    <label htmlFor="select-class">Class:</label>
                    <select
                    className='filter-class-input'
                        id='select-class'
                        name='select-class'
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        >
                    <option value="">Select Class</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
                    </select>
                </div>

                <div className="select-value-field">
                <label htmlFor="filterValue">Value:</label>
                <input
                    className='filter-input'
                    id='filterValue'
                    name='filterValue'
                    type="text"
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                    />
                </div>

                <div className="add-filters-btn">
                    <AddFiltersBtn
                        onClick={handleAddFilter}
                        sx={{color: "#4C4C4C"}}
                        endIcon= {<AddIcon />}
                        >Add
                    </AddFiltersBtn>
                </div>
            </div>
        
        </div>
        <div className='added-filters-container'>
            {filters.map((filtered, index) => (
            <div key={index} className='added-filter-box'>
                <span>{ filtered.option} :  </span><span id='filtered-value'> { filtered.value } </span>
                <button className='close-btn' onClick={() => handleRemoveFilter(filtered.id)}>X</button>
            </div>
            ))}
        </div>
    </div>
</div>
    </>
  )
}

export default FiltersSection