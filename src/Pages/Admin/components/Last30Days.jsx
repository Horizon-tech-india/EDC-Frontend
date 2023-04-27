import React from 'react'

    const Last30Days = () => {

        const StatsComponent = (props) => {
            return(
                <div className="stats-box">
                    <div className='stats-bg'>
                    <div className="stats-box-overlay">
                        <h2>{props.data}</h2>
                        <p>{props.datatype}</p>
                    </div>
                </div>
                </div>      
        )}

        return(
            <div className="last30-wrapper">
                <div className="header-text">
                    <p>In the last 30 days</p>
                </div>
                <div className="stats-components-container">
                    <div className="applications-component">
                        <StatsComponent data="1,500" datatype="Applications" />
                    </div>
                    <div className="new-application-component">
                        <StatsComponent datatype="New application"/>
                    </div>
                    <div className="approved-applications-component">
                        <StatsComponent datatype="Approved applications"/>
                    </div>
                </div>
            </div>
        )
    }

export default Last30Days