import React, { useState } from 'react';
import {Button, styled} from '@mui/material';
import Last30Days from './Last30Days';
import "../../../styles/filtersection.css"
import AddIcon from '@mui/icons-material/Add';
import filterIcon from "../../../assets/filter-search.svg";

const FiltersSection = () => {

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [filterValue, setFilterValue] = useState('');

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


    const options = [
        { label: 'Company', value: 'Company' },
        { label: 'Branch', value: 'Branch' },
        { label: 'Status', value: 'Location' },
      ];

    const handleAddFilter = () => {
        const newFilter = {
            option: selectedOption,
            value: filterValue,
        };
        const AddValues = (newFilter.option !== "" && newFilter.value !== "");
        ( AddValues ? setSelectedFilters([...selectedFilters, newFilter]) : setSelectedFilters([]));
        setSelectedOption('');
        setFilterValue('');
    };

    const handleRemoveFilter = (filterToRemove) => {
        const updatedFilters = selectedFilters.filter(
            (filter) => filter !== filterToRemove
        );
        setSelectedFilters(updatedFilters);
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
            {selectedFilters.map((filter, index) => (
            <div key={index} className='added-filter-box'>
                <span>{ filter.option} :  </span><span id='filtered-value'> { filter.value } </span>
                <button className='close-btn' onClick={() => handleRemoveFilter(filter)}>X</button>
            </div>
            ))}
        </div>
    </div>
</div>
    </>
  )
}

export default FiltersSection