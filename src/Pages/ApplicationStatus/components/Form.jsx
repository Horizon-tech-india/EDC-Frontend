import React, { useState } from 'react'
import { UploadFile } from '@mui/icons-material';
import { Button, styled,  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import {
    setName,
    setEmail,
    setContact,
    setLocation,
    setInstitute,
    setOtherInstitute,
    setAadhar,
    setCategory,
    setCategoryOther,
    setOtherUniversity,
    setOtherOrganisation,
    setOtherDesignation,
    setEnrollment,
    setTeamSize,
    setTeamMembers,
    setTitle,
    setUniqueFeatures,
    setCurrentStage,
    formInputs
  } from './formSlice';

import "../styles/form.css";


const Form = () => {

  const formData = useSelector( formInputs );
  const dispatch = useDispatch();

  const handleNameChange = e =>{
    dispatch(setName( e.target.value));
  };

  const handleEmailChange = e =>{
    dispatch(setEmail(e.target.value));
  };

  const handleContactChange = e =>{
    dispatch(setContact(e.target.value));
  };
  
  const handleLocationChange = e =>{
    dispatch(setLocation(e.target.value));
  };

  const handleInstituteChange = e =>{
    dispatch(setInstitute(e.target.value));
  };

  const handleOtherInstituteChange = e =>{
    dispatch(setOtherInstitute(e.target.value));
  };

  const handleAadharChange = e =>{
    dispatch(setAadhar(e.target.value));
  };

  const handleCategoryChange = e =>{
    dispatch(setCategory(e.target.value));
  };

  const handleCategoryOtherChange = e =>{
    dispatch(setCategoryOther(e.target.value));
  };

  const handleOtherUniversityChange = e =>{
    dispatch(setOtherUniversity(e.target.value));
  };

  const handleOtherOrganisationChange = e =>{
    dispatch(setOtherOrganisation(e.target.value));
  };

  const handleOtherDesignationChange = e =>{
    dispatch(setOtherDesignation(e.target.value));
  };

  const handleEnrollmentChange = e =>{
    dispatch(setEnrollment(e.target.value));
  };

  const handleTeamSizeChange = e =>{
    dispatch(setTeamSize(e.target.value));
  };

  const handleTeamMembersChange = e =>{
    dispatch(setTeamMembers(e.target.value));
  };

  const handleTitleChange = e =>{
    dispatch(setTitle(e.target.value));
  };

  const handleUniqueFeaturesChange = e =>{
    dispatch(setUniqueFeatures(e.target.value));
  };

  const handleCurrentStageChange = e =>{
    dispatch(setCurrentStage(e.target.value));
  };


    const companyName = "XYZ Company name";

      const [selectedFile, setSelectedFile] = useState(null);

      const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      }

      const SubmitBtn = styled(Button)({
        backgroundColor: '#0193DC',
        padding:'12px 40px',
        fontSize: 20,
        fontFamily: 'Open sans',
        fontWeight:600,
        textTransform: 'none',
        letterSpacing: 0.7,
        borderRadius: 7
    })

    const UploadBtn = styled(Button)({
      padding:'12px 40px',
      fontSize: 20,
      fontFamily: 'Open sans',
      fontWeight:600,
      textTransform: 'none',
      letterSpacing: 0.7,
      borderRadius: 7
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Alert();
        handleClickOpen();
        // reset(); // need to be handeled
    };


    // Was for use State.
    // const reset = () => {
    //   setFormData(prevState => {
    //     const resetState = {};
    //     for (const key in prevState) {
    //       resetState[key] = '';
    //     }
    //     return resetState;
    //   });
    // }


    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };


  return (
    <div className='form-section'>
        
    <div className="form-container">

            <div className="form-header">
                <h1> Hi, { companyName }</h1>
            </div>


            <div className="form-contents">

            <form onSubmit={ handleSubmit }>

            <div className="form-row">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name"  value={formData.name} onChange={handleNameChange} required />
      </div>

      <div className="form-row">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleEmailChange} required />
      </div>

      <div className="form-row">
        <label htmlFor="contact">Contact:</label>
        <input type="tel" id="contact" name="contact" value={formData.contact} onChange={handleContactChange} required />
      </div>

      <div className="form-row">
        <label htmlFor="location">Location:</label>
        <select id="location" name="location" value={formData.location} onChange={handleLocationChange} required>
          <option value="">Select location</option>
          <option value="Parul University">Parul University</option>
          <option value="Vadodra Startup Studio">Vadodra Startup Studio</option>
          <option value="Ahmedabad Startup Studio">Ahmedabad Startup Studio</option>
          <option value="Rajkot Startup Studio">Rajkot Startup Studio</option>
          <option value="Surat Startup Studio">Surat Startup Studio</option>
        </select>
      </div>

      
      {formData.location === 'Parul University' && (
        <div className=" additional-input show">
          <div className="form-row">
        <label htmlFor="institute">Applicant Institute/Organization Name</label>
        <select id="institute" name="institute" value={formData.institute} onChange={handleInstituteChange} required>
          <option value = "">Select</option>
          <option value="Parul Institute of Engineering & Technology (PIET)">Parul Institute of Engineering & Technology (PIET)</option>
          <option value="Parul Institute of Technology (PIT)">Parul Institute of Technology (PIT)</option>
          <option value="Parul Polytechnic Institute (PPI)">Parul Polytechnic Institute (PPI)</option>
          <option value="Parul Institute of Engineering & Technology - Diploma Studies (PIET-DS)">Parul Institute of Engineering & Technology - Diploma Studies (PIET-DS)</option>
          <option value="College of Agriculture">College of Agriculture</option>
          <option value="Parul Institute of Commerce">Parul Institute of Commerce</option>
          <option value="Parul Institute of Social Work">Parul Institute of Social Work</option>
          <option value="Parul Institute of Business Administration">Parul Institute of Business Administration</option>
          <option value="Parul Institute of Management and Research">Parul Institute of Management and Research</option>
          <option value="Parul Institute of Ayurveda">Parul Institute of Ayurveda</option>
          <option value="Parul Institute of Ayurveda and Research">Parul Institute of Ayurveda and Research</option>
          <option value="Jawaharlal Nehru Homeopathic Medical College">Jawaharlal Nehru Homeopathic Medical College</option>
          <option value="Rajkot Homoeopathic Medical College">Rajkot Homoeopathic Medical College</option>
          <option value="Parul Institute of Homeopathy & Research">Parul Institute of Homeopathy & Research</option>
          <option value="Ahmedabad Homoeopathic Medical College">Ahmedabad Homoeopathic Medical College</option>
          <option value="Parul Institute of Law">Parul Institute of Law</option>
          <option value="Parul Institute of Computer Application">Parul Institute of Computer Application</option>
          <option value="Parul Institute of Architecture & Research">Parul Institute of Architecture & Research</option>
          <option value="Parul institute of Design">Parul institute of Design</option>
          <option value="Parul Institute of Fine Arts">Parul Institute of Fine Arts</option>
          <option value="Parul Institute of Nursing">Parul Institute of Nursing</option>
          <option value="Parul Institute of Pharmacy">Parul Institute of Pharmacy</option>
          <option value="Parul Institute of Pharmacy & Research">Parul Institute of Pharmacy & Research</option>
          <option value="School of Pharmacy">School of Pharmacy</option>
          <option value="Parul Institute of Hotel Management and Catering Technology">Parul Institute of Hotel Management and Catering Technology</option>
          <option value="Parul Institute of Applied Sciences">Parul Institute of Applied Sciences</option>
          <option value="Parul Institute of Arts">Parul Institute of Arts</option>
          <option value="Parul Institute of Medical Science & Research">Parul Institute of Medical Science & Research</option>
          <option value="Department of Public Health">Department of Public Health</option>
          <option value="Department of Paramedical and Health Science">Department of Paramedical and Health Science</option>
          <option value="Ahmedabad Physiotherapy College">Ahmedabad Physiotherapy College</option>
          <option value="Parul Institute of Physiotherapy">Parul Institute of Physiotherapy</option>
          <option value="other">other</option>
        </select>
      </div>

     
      {formData.institute === "other" && (
      <div className='form-row additional-input show'>
        <label htmlFor="other_institute">Specify Other:</label>
          <input type="text" id="other_institute" name="other_institute" value={formData.other_institute} onChange={handleOtherInstituteChange} required />
      </div>
      )}

    
      <div className="form-row">
        <label htmlFor="category">Applicant Category:</label>
        <select id="category" name="category" value={formData.category} onChange={handleCategoryChange} required>
          <option value="">Select location</option>
          <option value="Parul University Student">Parul University Student</option>
          <option value="Parul University Staff member">Parul University Staff member</option>
          <option value="Parul University Alumni">Parul University Alumni</option>
          <option value="Other">Other</option>
        </select>
      </div>

      
      {formData.category === "Other" && (
      <div className='form-row additional-input show'>
        <label htmlFor="category_other">Specify Other:</label>
          <input type="text" id="category_other" name="category_other" value={formData.category_other} onChange={handleCategoryOtherChange} required />
      </div>
      )}
      
      <div className="form-row">
        <label htmlFor="enrollment_num">Applicant Enrollment Number/Employee ID/Alumini ID number</label>
        <input type="number" id="enrollment_num" name="enrollment_num" value={formData.enrollment_num} onChange={handleEnrollmentChange} required />
      </div>

      <div className="form-row">
        <label htmlFor="team_members">Name of Team Members <span>(Separated by comma)</span></label>
        <input type="text" id="team_members" name="team_members" value={formData.team_members} onChange={handleTeamMembersChange} required />
      </div>

      <div className="form-row">
        <label htmlFor="title">Title of the Startup/Idea/Innovation</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleTitleChange} required />
      </div>

      <div className="form-row">
        <label htmlFor="unique_features">Explain the uniqueness and distinctive features of the ( product / process / service ) solution</label>
        <input type="text" id="unique_features" name="unique_features" value={formData.unique_features} onChange={handleUniqueFeaturesChange} required />
      </div>

      <div className="form-row">
        <label htmlFor="current_stage">Current stage of Startup</label>
        <select id="current_stage" name="current_stage" value={formData.current_stage} onChange={handleCurrentStageChange} required>
          <option value="">Select</option>
          <option value="Idea">Idea</option>
          <option value="Prototype stage (If you have developed any working prototype of a solution proposed)">Prototype stage (If you have developed any working prototype of a solution proposed)</option>
          <option value="Startup Stage (If you have developed a final marketable product/service platform)">Startup Stage (If you have developed a final marketable product/service platform)</option>
        </select>
      </div>

      <div className='uploadFiles'>
          <div className="file-upload-text">
            <p>Proposal Idea / PPT</p>
            <p id='selected-file'>Selected file: <span>{selectedFile ? selectedFile.name : ''} </span></p>
          </div>
          <UploadBtn className='uploadFiles-btn'
          variant="contained"
          component="label"
          endIcon={<UploadFile sx={{color:"white"}} />}
          >
          Upload File
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            hidden
          >
          </input>
        </UploadBtn>
      </div>

      <div className="submitButton">
            <SubmitBtn variant='contained' type='submit'>
                Submit
            </SubmitBtn>
      </div>
  </div>
  )}

      {(formData.location ===  "Vadodra Startup Studio" || formData.location ===  "Surat Startup Studio" || formData.location === "Rajkot Startup Studio" || formData.location ===  "Ahmedabad Startup Studio"  ) && (
        <div className="additional-input show">
          <div className='form-row'>
          <label htmlFor="aadhar">Aadhar:</label>
          <input type="number" id="aadhar" name="aadhar" value={formData.aadhar} onChange={handleAadharChange} required />
          </div>
          
          <div className="form-row">
        <label htmlFor="category">Applicant Category:</label>
        <select id="category" name="category" value={formData.category} onChange={handleCategoryChange} required>
          <option value="">Select Category</option>
          <option value="Other University Student">Other University Student</option>
          <option value="Other University Staff member">Other University Staff member</option>
          <option value="Organisation">Organisation</option>
         
        </select>
      </div>

      {(formData.category === "Other University Student" || formData.category === "Other University Staff") && (
          <div className="form-row additional_input show">
          <label htmlFor="other_university">University name:</label>
          <input type="text" id="other_university" name="other_university" value={formData.other_university} onChange={handleOtherUniversityChange} required />
        </div>
      )}
      {(formData.category === "Organisation") && (
          <div className="additional_input show">
            <div className='form-row'>
          <label htmlFor="other_university">Organisation name:</label>
          <input type="text" id="other_university" name="other_university" value={formData.other_organisation} onChange={handleOtherOrganisationChange} required />
        </div>
        <div className='form-row'>
        <label htmlFor="designation">Your Designation:</label>
          <input type="text" id="designation" name="designation" value={formData.designation} onChange={handleOtherDesignationChange} required />
        </div>
        </div>
      )}

      

          <div className="form-row">
        <label htmlFor="tem_size">No. of other team members</label>
        <input type="number" id="team_size" name="team_size" value={formData.team_size} onChange={handleTeamSizeChange} required />
      </div>
      <div className="form-row">
        <label htmlFor="team_members">Name of Team Members <span>Separated by comma</span></label>
        <input type="text" id="team_members" name="team_members" value={formData.team_members} onChange={handleTeamMembersChange} required />
      </div>
      
      <div className="form-row">
        <label htmlFor="title">Title of the Startup/Idea/Innovation</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleTitleChange} required />
      </div>

      <div className="form-row">
        <label htmlFor="unique_features">Explain the uniqueness and distinctive features of the ( product / process / service ) solution</label>
        <input type="text" id="unique_features" name="unique_features" value={formData.unique_features} onChange={handleUniqueFeaturesChange} required />
      </div>

      <div className="form-row">
        <label htmlFor="current_stage">Current stage of Startup</label>
        <select id="current_stage" name="current_stage" value={formData.current_stage} onChange={handleCurrentStageChange} required>
          <option value="">Select</option>
          <option value="Idea">Idea</option>
          <option value="Prototype stage (If you have developed any working prototype of a solution proposed)">Prototype stage (If you have developed any working prototype of a solution proposed)</option>
          <option value="Startup Stage (If you have developed a final marketable product/service platform)">Startup Stage (If you have developed a final marketable product/service platform)</option>
        </select>
        </div>
        <div className='uploadFiles'>
        <div className="file-upload-text">
          <p>Proposal Idea / PPT</p>
          <p id='selected-file'>Selected file: <span>{selectedFile ? selectedFile.name : ''} </span></p>
          </div>
          
          <UploadBtn
          variant="contained"
          component="label"
          endIcon={<UploadFile sx={{color:"white"}} />}
          >
          Upload File
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            hidden
          >
          </input>
        </UploadBtn>
      </div>

      <div className="submitButton">
            <SubmitBtn variant='contained' type='submit'>
                Submit
            </SubmitBtn>
      </div>
      </div>
    )}
    </form>

            </div>
    </div>

    <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Form submitted successfully!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your details have been submitted.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={ handleClose } autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}

export default Form