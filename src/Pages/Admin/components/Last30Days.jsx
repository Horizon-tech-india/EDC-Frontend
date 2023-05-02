import React from 'react'

const StatsComponent = (props) => {
  return (
    <div className="stats-box">
      <div className="stats-bg">
        <div className="stats-box-overlay">
          <h2>{props.data}</h2>
          <p>{props.datatype}</p>
        </div>
      </div>
    </div>
  )
}

const Last30Days = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full ">
      <div className="flex justify-start items-start w-full py-2">
        <p>In the last 30 days</p>
      </div>
      <div className="grid w-full gap-5 justify-between items-center grid-cols-12">
        <div className=" col-span-4">
          <StatsComponent data="1,500" datatype="Applications" />
        </div>
        <div className="  col-span-4">
          <StatsComponent datatype="New application" />
        </div>
        <div className=" col-span-4">
          <StatsComponent datatype="Approved applications" />
        </div>
      </div>
    </div>
  )
}

export default Last30Days
