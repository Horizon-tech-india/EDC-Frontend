import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import { useFormik } from 'formik'
import { adminStageTwoForm } from '../../../validation/formSchema'

const initialValues = {
  incubationId: '',
  title: '',
  problemDescription: '',
  solutionDescription: '',
  uniquenessDescription: '',
  startupSector: '',
  innovationType: '',
  currentStage: '',
  startupProgram: '',
  startupStatus: '',
  startupGrade: '',
  programStartDate: '',
  yuktiInnovationId: '',
  yuktiPortalUserId: '',
  yuktiPortalPassword: '',
  teamLeaderName: '',
  teamLeaderEmail: '',
  teamLeaderContact: '',
  teamLeaderCategory: '',
  teamLeaderId: '',
  organisationName: '',
  teamMembers: '',
  teamMemberCategory: '',
  spoc: '',
  externalMentor: '',
  incubationDate: '',
  graduationDate: '',
  receivedFunding: '',
  fundingAgency: '',
  fundSanctionDate: '',
  fundingAmount: '',
  registeredCompany: '',
  companyType: '',
  cinUdhyamRegistrationNo: '',
  companyRegistrationDate: '',
  dpiitRecognised: '',
  dpiitCertificateNo: '',
  incubatedAt: '',
  ipFilledGranted: '',
  ipTypes: '',
  ipDetails: '',
  revenueGeneration: '',
  numOfEmployees: '',
  folderLink: '',
}

const StageTwoForm = () => {
  const location = useLocation()
  const startupDetails = location.state
  const { state } = useContext(AuthContext)
  const [openMsg, setOpenMsg] = useState('')
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues,
    validationSchema: adminStageTwoForm,
    onSubmit: async (values) => {
      console.log(values)
      // setIsLoading(true)
      // const body = { ...values, branch }
      // try {
      //   const res = await CreateNewAdmin(body, state.token)
      //   console.log(`first`, res)
      //   if (res?.response?.status === 400) {
      //     setIsLoading(false)
      //     setOpenMsg(res?.response?.data?.message)
      //   }
      //   if (res?.status === 200) {
      //     setOpenMsg(res?.data?.message)
      //     setOpen(true)
      //     resetForm()
      //     handleClose()
      //     handleRefresh()
      //   }
      // } catch (error) {
      //   setOpenMsg(error?.message)
      //   resetForm()
      //   setIsLoading(false)
      // }
    },
  })

  return (
    <div className="max-h-[100vh] overflow-y-scroll">
      <form onSubmit={handleSubmit} className="admin-add__form mx-10 mb-20">
        <h1 className="w-full text-2xl text-center mt-10 mb-6">{startupDetails.name}'s Stage 2 Form</h1>
        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="incubationId">Incubation ID</label>
            <input
              className="border border-gray-400"
              type="text"
              name="incubationId"
              id="incubationId"
              placeholder="Enter incubation ID"
              value={values.incubationId}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.incubationId && touched.incubationId ? (
                <p className="input-block__error">{errors.incubationId}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="title">Title of the Startup/Idea/Innovation</label>
            <input
              className="border border-gray-400"
              type="text"
              name="title"
              id="title"
              placeholder="Enter title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.title && touched.title ? <p className="input-block__error">{errors.title}</p> : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="problemDescription">Define the problem that your startup is solving</label>
            <input
              className="border border-gray-400"
              type="text"
              name="problemDescription"
              id="problemDescription"
              placeholder="Enter problem description"
              value={values.problemDescription}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.problemDescription && touched.problemDescription ? (
                <p className="input-block__error">{errors.problemDescription}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="solutionDescription">Describe the solution</label>
            <input
              className="border border-gray-400"
              type="text"
              name="solutionDescription"
              id="solutionDescription"
              placeholder="Enter solution description"
              value={values.solutionDescription}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.solutionDescription && touched.solutionDescription ? (
                <p className="input-block__error">{errors.solutionDescription}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="uniquenessDescription">
              Explain the uniqueness and distinctive features of the (product/process/service) solution
            </label>
            <input
              className="border border-gray-400"
              type="text"
              name="uniquenessDescription"
              id="uniquenessDescription"
              placeholder="Enter uniqueness description"
              value={values.uniquenessDescription}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.uniquenessDescription && touched.uniquenessDescription ? (
                <p className="input-block__error">{errors.uniquenessDescription}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="startupSector">Startup Sector</label>
            <input
              className="border border-gray-400"
              type="text"
              name="startupSector"
              id="startupSector"
              placeholder="Enter Startup Sector"
              value={values.startupSector}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.startupSector && touched.startupSector ? (
                <p className="input-block__error">{errors.startupSector}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="innovationType">Innovation Type</label>
            <input
              className="border border-gray-400"
              type="text"
              name="innovationType"
              id="innovationType"
              placeholder="Enter Innovation Type"
              value={values.innovationType}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.innovationType && touched.innovationType ? (
                <p className="input-block__error">{errors.innovationType}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="currentStage">Current Stage of Startup</label>
            <input
              className="border border-gray-400"
              type="text"
              name="currentStage"
              id="currentStage"
              placeholder="Enter Current Stage"
              value={values.currentStage}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.currentStage && touched.currentStage ? (
                <p className="input-block__error">{errors.currentStage}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="startupProgram">Startup Program</label>
            <input
              className="border border-gray-400"
              type="text"
              name="startupProgram"
              id="startupProgram"
              placeholder="Enter Startup Program"
              value={values.startupProgram}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.startupProgram && touched.startupProgram ? (
                <p className="input-block__error">{errors.startupProgram}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="startupStatus">Startup Status</label>
            <input
              className="border border-gray-400"
              type="text"
              name="startupStatus"
              id="startupStatus"
              placeholder="Enter Startup Status"
              value={values.startupStatus}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.startupStatus && touched.startupStatus ? (
                <p className="input-block__error">{errors.startupStatus}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="startupGrade">
              Startup Grade (Depending on how active and passionate are the founders to take their Startup Forward)
            </label>
            <input
              className="border border-gray-400"
              type="text"
              name="startupGrade"
              id="startupGrade"
              placeholder="Enter Startup Grade"
              value={values.startupGrade}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.startupGrade && touched.startupGrade ? (
                <p className="input-block__error">{errors.startupGrade}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="programStartDate">Program Start Date</label>
            <input
              className="border border-gray-400"
              type="date"
              name="programStartDate"
              id="programStartDate"
              placeholder="Enter Program Start Date"
              value={values.programStartDate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.programStartDate && touched.programStartDate ? (
                <p className="input-block__error">{errors.programStartDate}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="yuktiInnovationId">Yukti Innovation ID</label>
            <input
              className="border border-gray-400"
              type="text"
              name="yuktiInnovationId"
              id="yuktiInnovationId"
              placeholder="Enter Yukti Innovation ID"
              value={values.yuktiInnovationId}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.yuktiInnovationId && touched.yuktiInnovationId ? (
                <p className="input-block__error">{errors.yuktiInnovationId}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="yuktiPortalUserId">Yukti Portal User ID</label>
            <input
              className="border border-gray-400"
              type="text"
              name="yuktiPortalUserId"
              id="yuktiPortalUserId"
              placeholder="Enter Yukti Portal User ID"
              value={values.yuktiPortalUserId}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.yuktiPortalUserId && touched.yuktiPortalUserId ? (
                <p className="input-block__error">{errors.yuktiPortalUserId}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="yuktiPortalPassword">Yukti Portal Password</label>
            <input
              className="border border-gray-400"
              type="text"
              name="yuktiPortalPassword"
              id="yuktiPortalPassword"
              placeholder="Enter Yukti Portal Password"
              value={values.yuktiPortalPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.yuktiPortalPassword && touched.yuktiPortalPassword ? (
                <p className="input-block__error">{errors.yuktiPortalPassword}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="teamLeaderName">Team Leader's name</label>
            <input
              className="border border-gray-400"
              type="text"
              name="teamLeaderName"
              id="teamLeaderName"
              placeholder="Enter Team Leader name"
              value={values.teamLeaderName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.teamLeaderName && touched.teamLeaderName ? (
                <p className="input-block__error">{errors.teamLeaderName}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="teamLeaderEmail">Team Leader's email address</label>
            <input
              className="border border-gray-400"
              type="text"
              name="teamLeaderEmail"
              id="teamLeaderEmail"
              placeholder="Enter Team Leader email"
              value={values.teamLeaderEmail}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.teamLeaderEmail && touched.teamLeaderEmail ? (
                <p className="input-block__error">{errors.teamLeaderEmail}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="teamLeaderContact">Team Leader's Contact Number</label>
            <input
              className="border border-gray-400"
              type="text"
              name="teamLeaderContact"
              id="teamLeaderContact"
              placeholder="Enter Team Leader Contact"
              value={values.teamLeaderContact}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.teamLeaderContact && touched.teamLeaderContact ? (
                <p className="input-block__error">{errors.teamLeaderContact}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="teamLeaderCategory">Team Leader's Category (PU Student, PU Alumni, PU Staff, other)</label>
            <select
              className="border border-gray-400 p-2 rounded bg-[#f3ebeb] outline-none"
              id="teamLeaderCategory"
              name="teamLeaderCategory"
              value={values.teamLeaderCategory}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            >
              <option value="" hidden disabled>
                Select Team Leader's Category
              </option>
              <option value="PU Student">PU Student</option>
              <option value="PU Alumni">PU Alumni</option>
              <option value="PU Staff">PU Staff</option>
              <option value="other">other</option>
            </select>
            <div className="h-3 mb-2">
              {errors.teamLeaderCategory && touched.teamLeaderCategory ? (
                <p className="input-block__error">{errors.teamLeaderCategory}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="teamLeaderId">
              Team Leader's Enrollment Number/Employee ID/Alumni ID number(If Applicable)
            </label>
            <input
              className="border border-gray-400"
              type="text"
              name="teamLeaderId"
              id="teamLeaderId"
              placeholder="Enter Team Leader ID"
              value={values.teamLeaderId}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.teamLeaderId && touched.teamLeaderId ? (
                <p className="input-block__error">{errors.teamLeaderId}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="organisationName">Organisation Name (Write 'NA' if not applicable)</label>
            <input
              className="border border-gray-400"
              type="text"
              name="organisationName"
              id="organisationName"
              placeholder="Enter Organistion Name"
              value={values.organisationName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.organisationName && touched.organisationName ? (
                <p className="input-block__error">{errors.organisationName}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="teamMembers">
              Write the names and contact number of all the other team members separated by commas
            </label>
            <input
              className="border border-gray-400"
              type="text"
              name="teamMembers"
              id="teamMembers"
              placeholder="Enter Team members' data"
              value={values.teamMembers}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.teamMembers && touched.teamMembers ? (
                <p className="input-block__error">{errors.teamMembers}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="teamMemberCategory">
              Is any member of the team belong to OBC/SC/ST? If Yes, then mention the name and category
            </label>
            <input
              className="border border-gray-400"
              type="text"
              name="teamMemberCategory"
              id="teamMemberCategory"
              placeholder="Enter Team Member's Category"
              value={values.teamMemberCategory}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.teamMemberCategory && touched.teamMemberCategory ? (
                <p className="input-block__error">{errors.teamMemberCategory}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="spoc">Internal team Member assigned as a SPOC (Mentor)</label>
            <input
              className="border border-gray-400"
              type="text"
              name="spoc"
              id="spoc"
              placeholder="Enter Mentor"
              value={values.spoc}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.spoc && touched.spoc ? <p className="input-block__error">{errors.spoc}</p> : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="externalMentor">Mentor assigned from PIERC External Mentor Board</label>
            <input
              className="border border-gray-400"
              type="text"
              name="externalMentor"
              id="externalMentor"
              placeholder="Enter External Mentor"
              value={values.externalMentor}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.externalMentor && touched.externalMentor ? (
                <p className="input-block__error">{errors.externalMentor}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="incubationDate">Date of Incubation</label>
            <input
              className="border border-gray-400"
              type="date"
              name="incubationDate"
              id="incubationDate"
              value={values.incubationDate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.incubationDate && touched.incubationDate ? (
                <p className="input-block__error">{errors.incubationDate}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="graduationDate">Date of Graduation</label>
            <input
              className="border border-gray-400"
              type="date"
              name="graduationDate"
              id="graduationDate"
              value={values.graduationDate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.graduationDate && touched.graduationDate ? (
                <p className="input-block__error">{errors.graduationDate}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="receivedFunding">Received Funding(Yes/No)</label>
            <select
              className="border border-gray-400 p-2 rounded bg-[#f3ebeb] outline-none"
              id="receivedFunding"
              name="receivedFunding"
              value={values.receivedFunding}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            >
              <option value="" hidden disabled>
                Received Funding?
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="h-3 mb-2">
              {errors.receivedFunding && touched.receivedFunding ? (
                <p className="input-block__error">{errors.receivedFunding}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="fundingAgency">Funding Agency (if applicable)</label>
            <input
              className="border border-gray-400"
              type="text"
              name="fundingAgency"
              id="fundingAgency"
              placeholder="Enter Funding Agency"
              value={values.fundingAgency}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.fundingAgency && touched.fundingAgency ? (
                <p className="input-block__error">{errors.fundingAgency}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="fundSanctionDate">Date of fund sanction (If applicable)</label>
            <input
              className="border border-gray-400"
              type="date"
              name="fundSanctionDate"
              id="fundSanctionDate"
              placeholder="Enter Fund Sanction Date"
              value={values.fundSanctionDate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.fundSanctionDate && touched.fundSanctionDate ? (
                <p className="input-block__error">{errors.fundSanctionDate}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="fundingAmount">Funding Amount (If applicable)</label>
            <input
              className="border border-gray-400"
              type="text"
              name="fundingAmount"
              id="fundingAmount"
              placeholder="Enter Funding Amount"
              value={values.fundingAmount}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.fundingAmount && touched.fundingAmount ? (
                <p className="input-block__error">{errors.fundingAmount}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="registeredCompany">Registered a company? (Yes/No)</label>
            <select
              className="border border-gray-400 p-2 rounded bg-[#f3ebeb] outline-none"
              id="registeredCompany"
              name="registeredCompany"
              value={values.registeredCompany}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            >
              <option value="" hidden disabled>
                Company registered?
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="h-3 mb-2">
              {errors.registeredCompany && touched.registeredCompany ? (
                <p className="input-block__error">{errors.registeredCompany}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="companyType">Company Type</label>
            <input
              className="border border-gray-400"
              type="text"
              name="companyType"
              id="companyType"
              placeholder="Enter Company Type"
              value={values.companyType}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.companyType && touched.companyType ? (
                <p className="input-block__error">{errors.companyType}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="cinUdhyamRegistrationNo">
              Corporate Identification No (CIN)/Udhyam Registration No. (If applicable)
            </label>
            <input
              className="border border-gray-400"
              type="text"
              name="cinUdhyamRegistrationNo"
              id="cinUdhyamRegistrationNo"
              placeholder="First Name"
              value={values.cinUdhyamRegistrationNo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.cinUdhyamRegistrationNo && touched.cinUdhyamRegistrationNo ? (
                <p className="input-block__error">{errors.cinUdhyamRegistrationNo}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="companyRegistrationDate">Company Registration Date (If applicable)</label>
            <input
              className="border border-gray-400"
              type="date"
              name="companyRegistrationDate"
              id="companyRegistrationDate"
              placeholder="Enter Company Registration Date"
              value={values.companyRegistrationDate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.companyRegistrationDate && touched.companyRegistrationDate ? (
                <p className="input-block__error">{errors.companyRegistrationDate}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="dpiitRecognised">Is startup recognised by DPIIT?</label>
            <select
              className="border border-gray-400 p-2 rounded bg-[#f3ebeb] outline-none"
              id="dpiitRecognised"
              name="dpiitRecognised"
              value={values.dpiitRecognised}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            >
              <option value="" hidden disabled>
                Recognised by DPIIT?
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="h-3 mb-2">
              {errors.dpiitRecognised && touched.dpiitRecognised ? (
                <p className="input-block__error">{errors.dpiitRecognised}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="dpiitCertificateNo">DPIIT Certification No (If applicable)</label>
            <input
              className="border border-gray-400"
              type="text"
              name="dpiitCertificateNo"
              id="dpiitCertificateNo"
              placeholder="DPIIT Cartification No"
              value={values.dpiitCertificateNo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.dpiitCertificateNo && touched.dpiitCertificateNo ? (
                <p className="input-block__error">{errors.dpiitCertificateNo}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="incubatedAt">Incubated At (EDC, VSS, RSS, ASS and SSS)</label>
            <select
              className="border border-gray-400 p-2 rounded bg-[#f3ebeb] outline-none"
              id="incubatedAt"
              name="incubatedAt"
              value={values.incubatedAt}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            >
              <option value="" hidden disabled>
                Incubated at
              </option>
              <option value="EDC">EDC</option>
              <option value="VSS">VSS</option>
              <option value="RSS">RSS</option>
              <option value="ASS">ASS</option>
              <option value="SSS">SSS</option>
            </select>
            <div className="h-3 mb-2">
              {errors.incubatedAt && touched.incubatedAt ? (
                <p className="input-block__error">{errors.incubatedAt}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="ipFilledGranted">Whether IP filled/granted? (Yes/No)</label>
            <select
              className="border border-gray-400 p-2 rounded bg-[#f3ebeb] outline-none"
              id="ipFilledGranted"
              name="ipFilledGranted"
              value={values.ipFilledGranted}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            >
              <option value="" hidden disabled>
                IP filled/granted?
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="h-3 mb-2">
              {errors.ipFilledGranted && touched.ipFilledGranted ? (
                <p className="input-block__error">{errors.ipFilledGranted}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="ipTypes">IP Types (Patent, Trademark, Copyrights, Design, etc)</label>
            <select
              className="border border-gray-400 p-2 rounded bg-[#f3ebeb] outline-none"
              id="ipTypes"
              name="ipTypes"
              value={values.ipTypes}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            >
              <option value="" hidden disabled>
                Select IP Types
              </option>
              <option value="Patent">Patent</option>
              <option value="Trademark">Trademark</option>
              <option value="Copyrights">Copyrights</option>
              <option value="Design">Design</option>
            </select>
            <div className="h-3 mb-2">
              {errors.ipTypes && touched.ipTypes ? <p className="input-block__error">{errors.ipTypes}</p> : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="ipDetails">IP details with registration and application</label>
            <input
              className="border border-gray-400"
              type="text"
              name="ipDetails"
              id="ipDetails"
              placeholder="IP details"
              value={values.ipDetails}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.ipDetails && touched.ipDetails ? <p className="input-block__error">{errors.ipDetails}</p> : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="revenueGeneration">Revenue Generation (Annualy)</label>
            <input
              className="border border-gray-400"
              type="text"
              name="revenueGeneration"
              id="revenueGeneration"
              placeholder="Revenue Generation"
              value={values.revenueGeneration}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.revenueGeneration && touched.revenueGeneration ? (
                <p className="input-block__error">{errors.revenueGeneration}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="numOfEmployees">No. of employees</label>
            <input
              className="border border-gray-400"
              type="text"
              name="numOfEmployees"
              id="numOfEmployees"
              placeholder="Enter No. of employees"
              value={values.numOfEmployees}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.numOfEmployees && touched.numOfEmployees ? (
                <p className="input-block__error">{errors.numOfEmployees}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="m-auto w-full max-w-xl">
          <div className="input__container">
            <label htmlFor="folderLink">Folder Link</label>
            <input
              className="border border-gray-400"
              type="text"
              name="folderLink"
              id="folderLink"
              placeholder="Enter Folder Link"
              value={values.folderLink}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="h-3 mb-2">
              {errors.folderLink && touched.folderLink ? (
                <p className="input-block__error">{errors.folderLink}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <span className="text-xl text-red-500  mx-auto text-center px-2 py-2"> {openMsg && openMsg}</span>
        </div>
        {isLoading ? (
          <button className="admin-add__submit" type="button" disabled>
            Submitting...
          </button>
        ) : (
          <button className="admin-add__submit" type="submit">
            Submit
          </button>
        )}
      </form>
    </div>
  )
}

export default StageTwoForm
