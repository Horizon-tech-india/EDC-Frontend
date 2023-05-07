import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { GetStatsNumber } from '../../../Api/Post'
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
  const { state } = useContext(AuthContext)
  const token = state.token
  const { data } = GetStatsNumber(token)
  return (
    <div className=" flex flex-col justify-center items-center w-full ">
      <div className="flex justify-start items-start w-full py-2">
        <p>In the last 30 days</p>
      </div>

      <div className="grid w-full gap-5 justify-between items-center grid-cols-12">
        <div className=" col-span-4">
          <StatsComponent data={data?.data?.totalCount || 0} datatype="Applications" />
        </div>
        <div className="  col-span-4">
          <StatsComponent data={data?.data?.pendingCount || 0} datatype="New application" />
        </div>
        <div className=" col-span-4">
          <StatsComponent data={data?.data?.approvedCount || 0} datatype="Approved applications" />
        </div>
      </div>
    </div>
  )
}

export default Last30Days
