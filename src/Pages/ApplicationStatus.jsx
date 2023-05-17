import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Header from '../components/common/Header'
import Form from '../components/application/Form'
import Footer from '../components/Layout/Footer'
import Navigation from '../components/Layout/Navbar'
import { GetUserStartupStatus } from '../Api/Post'
import Spinner from '../components/Layout/Spinner'

const ApplicationStatus = () => {
  const { state } = useContext(AuthContext)

  const { data, isLoading } = GetUserStartupStatus(state.token)

  const status = data?.data?.startupStatus
  const textBodyWaitSec1 =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  const textBodyWaitSec2 = 'Admin PPDB SMPN 1 Cibadak'

  return (
    <>
      <Navigation />
      <Header props={'Provide All The Details'} />
      {state.isAuthenticated ? (
        <>
          {isLoading && isLoading ? (
            <div className="my-30">
              <Spinner />
            </div>
          ) : status === 'pending' || status === 'rejected' ? (
            <div className="waiting-sec-content mx-auto my-10">
              {status === 'pending' ? (
                <div className="waiting-sec-content-row1 bg-indigo-500">
                  <h1> Application Status : Pending </h1>
                </div>
              ) : (
                <div className="waiting-sec-content-row1 bg-red-600">
                  <h1> Application Status : Rejected </h1>
                </div>
              )}
              <div className="waiting-sec-content-row2">
                <div className="waiting-sec-content-row2-row1">
                  <p> {textBodyWaitSec1} </p>
                </div>
                <div className="waiting-sec-content-row2-row2">
                  <p> {textBodyWaitSec2} </p>
                </div>
              </div>
            </div>
          ) : (
            <Form />
          )}
        </>
      ) : (
        <Form />
      )}

      <Footer />
    </>
  )
}

export default ApplicationStatus
