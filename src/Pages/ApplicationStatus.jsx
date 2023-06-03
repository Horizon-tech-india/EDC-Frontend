import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import Header from '../components/common/Header'
import Form from '../components/application/Form'
import Footer from '../components/Layout/Footer'
import Navigation from '../components/Layout/Navbar'
import { GetUserStartupStatus } from '../Api/Post'
import { UploadFile as UploadFileIcon } from '@mui/icons-material'
import { styled, Button } from '@mui/material'
import { UploadFile } from '../Api/Post'

const ApplicationStatus = () => {
  const { state } = useContext(AuthContext)

  const { data, refetch, isLoading } = GetUserStartupStatus(state.token)

  const status = data?.data?.startupStatus
  const textBodyWaitSec1 =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  const textBodyWaitSec2 = 'Admin PPDB SMPN 1 Cibadak'

  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
    //console.log(event)
  }

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData()
      formData.append('originalname', selectedFile, selectedFile.name)
      formData.append('mimetype', selectedFile.type)
      const fileReader = new FileReader()

      fileReader.onload = async () => {
        const arrayBuffer = fileReader.result
        const buffer = new Uint8Array(arrayBuffer)
        formData.append('buffer', buffer)
        const payload = formData
        //console.log(selectedFile.name,selectedFile.type,buffer)
        try {
          const token = state.token
          const res = await UploadFile({ payload, token })
          if (res?.status === 200) {
            console.log('200')
          }
        } catch (error) {
          console.error(error.message)
        }
      }

      fileReader.readAsArrayBuffer(selectedFile)
    }
  }

  useEffect(() => {
    handleUpload()
  }, [selectedFile])

  const UploadBtn = styled(Button)({
    padding: '12px 40px',
    fontSize: 20,
    fontFamily: 'Open sans',
    fontWeight: 600,
    textTransform: 'none',
    letterSpacing: 0.7,
    borderRadius: 7,
  })

  return (
    <>
      <Navigation />
      <Header props={'Provide All The Details'} />
      {state.isAuthenticated ? (
        <>
          {status === 'pending' ? (
            <div className="waiting-sec-content mx-auto mt-20 mb-40">
              <div className="waiting-sec-content-row1 bg-blue-600">
                <h1> Application Status : Pending </h1>
              </div>
              <div className="waiting-sec-content-row2">
                <div className="waiting-sec-content-row2-row1">
                  <p> {textBodyWaitSec1} </p>
                </div>
                <div className="waiting-sec-content-row2-row2">
                  <p> {textBodyWaitSec2} </p>
                </div>
              </div>
            </div>
          ) : status === 'rejected' ? (
            <div className="waiting-sec-content mx-auto mt-20 mb-40">
              <div className="waiting-sec-content-row1 bg-red-600">
                <h1> Application Status : Rejected </h1>
              </div>
              <div className="waiting-sec-content-row2">
                <div className="waiting-sec-content-row2-row1">
                  <p> {textBodyWaitSec1} </p>
                </div>
                <div className="waiting-sec-content-row2-row2">
                  <p> {textBodyWaitSec2} </p>
                </div>
              </div>
            </div>
          ) : status === 'verified' ? (
            <>
              <div className="waiting-sec-content mx-auto mt-20 mb-20">
                <div className="waiting-sec-content-row1 bg-green-600">
                  <h1> Application Status : Verified </h1>
                </div>
                <div className="waiting-sec-content-row2">
                  <div className="waiting-sec-content-row2-row1">
                    <p> {textBodyWaitSec1} </p>
                  </div>
                  <div className="waiting-sec-content-row2-row2">
                    <p> {textBodyWaitSec2} </p>
                  </div>
                </div>
              </div>
              <div className="uploadFiles mx-10">
                <div className="file-upload-text">
                  <p>Proposal Idea / PPT</p>
                  <p id="selected-file">
                    Selected file: <span>{selectedFile ? selectedFile.name : ''} </span>
                  </p>
                </div>
                {!state.isAuthenticated ? (
                  <UploadBtn
                    variant="contained"
                    component="label"
                    disabled
                    endIcon={<UploadFileIcon sx={{ color: 'white' }} />}
                  >
                    Upload File
                    <input type="file" accept=".pdf" onChange={handleFileChange} hidden></input>
                  </UploadBtn>
                ) : (
                  <UploadBtn variant="contained" component="label" endIcon={<UploadFileIcon sx={{ color: 'white' }} />}>
                    Upload File
                    <input type="file" accept=".pdf" onChange={handleFileChange} hidden></input>
                  </UploadBtn>
                )}
              </div>
            </>
          ) : (
            <Form refetchStartupStatus={refetch} />
          )}
        </>
      ) : (
        <Form refetchStartupStatus={refetch} />
      )}

      <Footer />
    </>
  )
}

export default ApplicationStatus
