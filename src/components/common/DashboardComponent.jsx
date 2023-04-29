import React from 'react'

const Box = (props) => {
  return (
    <div className="bg-gray-300 p-2 h-80 w-80">
      <p className="text-center w-full font-semibold text-xl">{props.props}</p>{' '}
    </div>
  )
}

const DashboardComponent = () => {
  return (
    <section className="h-auto mt-20  w-full">
      <div className="grid w-full mx-auto max-w-7xl grid-rows-3 grid-flow-col gap-4">
        <div className="row-end-3 row-span-2 ...">
          <Box props={'Upcoming Meetings'} />
        </div>
        <div className="row-start-2 row-span-2 ...">
          <Box props={'Financial Report'} />
        </div>
        <div className="row-start-1 row-end-4 ...">
          <Box props={'Feedback From Mentors'} />
        </div>
      </div>
      <div className="grid w-full mx-auto max-w-7xl grid-rows-3 grid-flow-col gap-4">
        <div className="row-end-3 row-span-2 ...">
          <Box props={'Upcoming Events'} />
        </div>
        <div className="row-start-2 row-span-2 ...">
          <div className="w-80 h-80"></div>
        </div>
        <div className="row-start-1 row-end-4 ...">
          <Box props={'Connect to Mentors'} />
        </div>
      </div>
    </section>
  )
}

export default DashboardComponent
