import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '',email: '',contact: '',location: '',
  institute: '',other_institute:'',aadhar: '',category: '',category_other: '',other_university: '',other_organisation: '',designation: '',enrollment_num: '',team_size: '',team_members: '',title: '',unique_features: '',current_stage: '',
}

const formSlice = createSlice({
  name: 'form',
  initialState,

  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setContact: (state, action) => {
      state.contact = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setInstitute: (state, action) => {
        state.institute = action.payload;
    },
    setOtherInstitute: (state, action) => {
      state.other_institute = action.payload;
    },
    setAadhar: (state, action) => {
      state.aadhar = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setCategoryOther: (state, action) => {
      state.category_other = action.payload;
    },
    setOtherUniversity: (state, action) => {
      state.other_university = action.payload;
    },
    setOtherOrganisation: (state, action) => {
      state.other_organisation = action.payload;
    },
    setOtherDesignation: (state, action) => {
      state.designation = action.payload;
    },
    setEnrollment: (state, action) => {
      state.enrollment_num = action.payload;
    },
    setTeamSize: (state, action) => {
      state.team_size = action.payload;
    },
    setTeamMembers: (state, action) => {
      state.team_members = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setUniqueFeatures: (state, action) => {
      state.unique_features = action.payload;
    },
    setCurrentStage: (state, action) => {
      state.current_stage = action.payload;
    },
  },
});

export const {
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
} = formSlice.actions;

export const formInputs = (state) => state.form;
export default formSlice.reducer;
