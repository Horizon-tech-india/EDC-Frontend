import searchIcon from '../../../assets/search-normal.svg'
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { API } from '../../../Api/Post'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

function SearchBar() {
  const [allStartups, setAllStartups] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [open, setOpen] = useState(true)
  const [modalState, setModalState] = useState(false)
  const [userData, setUserData] = useState({
    aadhar: '',
    branch: '',
    category: '',
    categoryOther: '',
    contact: '',
    currentStage: '',
    designation: '',
    email: '',
    enrollmentNum: '',
    institute: '',
    location: '',
    name: '',
    otherInstitute: '',
    otherOrganisation: '',
    otherUniversity: '',
    startupId: '',
    status: '',
    teamMembers: '',
    teamSize: '',
    title: '',
    uniqueFeatures: '',
    updatedAt: '',
  })
  const { state } = useContext(AuthContext)

  useEffect(() => {
    API('get', '/admin/all-startup-details', {}, state.token)
      // .then((data) => console.log(`SEARCH BAR FILTER`, data?.data?.data))
      .then((data) => setAllStartups(data?.data?.data))
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    if (Array.isArray(allStartups)) {
      const filtered = allStartups.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()))
      setFilteredData(filtered)
    } else {
      console.log(`not an array`)
    }
  }, [allStartups, inputValue])

  const handleInputChange = (event) => {
    console.log(filteredData)
    setInputValue(event.target.value)
    const value = event.target.value.trim()
    if (value.length > 0) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: '24px',
    p: 4,
  }
  const handleClick = (data) => {
    setModalState(true)

    setUserData((prev) => {
      return {
        ...prev,
        aadhar: data.aadhar,
        branch: data.branch,
        category: data.category,
        categoryOther: data.categoryOther,
        contact: data.contact,
        currentStage: data.currentStage,
        designation: data.designation,
        email: data.email,
        enrollmentNum: data.enrollmentNum,
        institute: data.institute,
        location: data.location,
        name: data.name,
        otherInstitute: data.otherInstitute,
        otherOrganisation: data.otherOrganisation,
        otherUniversity: data.otherUniversity,
        startupId: data.startupId,
        status: data.status,
        teamMembers: data.teamMembers,
        teamSize: data.teamSize,
        title: data.title,
        uniqueFeatures: data.uniqueFeatures,
        updatedAt: data.updatedAt,
      }
    })
  }

  const handleClose = () => {
    setModalState(false)
  }
  return (
    <>
      <div className=" search-bar w-full">
        <div className="search-wrapper">
          <img src={searchIcon} alt="searchbar" className="search-icon" />
          <input
            className="search-input  "
            type="text"
            placeholder="Search startups"
            onChange={handleInputChange}
            value={inputValue}
          />
        </div>

        <div
          className={`fixed ${
            open ? 'hidden' : 'block'
          }  h-auto w-full max-w-3xl top-16 z-50 p-2 bg-[#fafafa] border border-gray-200  rounded-md`}
          id="filter-results"
        >
          {filteredData.map((item) => (
            <div
              className="bg-white text-xs capitalize font-light border border-gray-200 p-2 w-full rounded-md my-1"
              key={item.startupId}
              onClick={() => handleClick(item)}
            >
              <ul className="grid grid-cols-12 cursor-pointer">
                <li className="col-span-2"> {item.name}</li>
                <li className="col-span-3"> {item.email}</li>
                <li className="col-span-2"> {item.location}</li>
                <li className="col-span-1"> {item.branch}</li>
                <li className="col-span-2"> {item.startupId}</li>
                <li className="col-span-2"> {item.title}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Modal
          open={modalState}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title justify-items-center" variant="h6" component="h5">
              Company Details
            </Typography>
            {Object.keys(userData).map((item) => {
              return (
                <Typography key={item.startupId} id="modal-modal-title justify-items-center" variant="p" component="p">
                  <span className="capitalize text-green-600 m-3"> {item} </span> - {userData[item]}
                </Typography>
              )
            })}

            <Button onClick={handleClose} size="large" variant="contained" color="success">
              Close
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  )
}

export default SearchBar
