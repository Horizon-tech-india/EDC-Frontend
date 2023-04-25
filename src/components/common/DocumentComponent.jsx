import React from 'react'
import "../../styles/documentsWaitingSection.css";

const DocumentComponent = () => {
  const headingWaitSec = "Waiting for the approval";

  const textBodyWaitSec1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

  const textBodyWaitSec2 = "Admin PPDB SMPN 1 Cibadak";

  return (
    // <div className="min-h-screen w-full flex justify-center items-center">
    //   DocumentComponent
    // </div>
    <div className="waiting-sec-container">
        <div className="waiting-sec-content-container">
            <div className="waiting-sec-content">
                <div className="waiting-sec-content-row1">
                    <h1> { headingWaitSec } </h1>
                </div>
                <div className="waiting-sec-content-row2">
                    <div className="waiting-sec-content-row2-row1">
                        <p> { textBodyWaitSec1 } </p>
                    </div>
                    <div className="waiting-sec-content-row2-row2">
                        <p> { textBodyWaitSec2 } </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DocumentComponent
