import React from 'react'
import MaterialReactTable from 'material-react-table'
import { useMemo } from 'react'

const Boxs = (props) => {
  
  return (
    <div className="bg-gray-300 p-2 h-80 w-80">
      <p className="text-center w-full font-semibold text-xl">{props.name}</p>
      {' '}
      
    </div>
  )
}

const Box = (props) => {
  
  const ReportTable = (data) => {
    console.log(data,"kkkh")
    const columns = useMemo(
      () => [
        {
          accessorKey: 'type', //access nested data with dot notation
          header: 'Type',
        },
        
        {
          accessorKey: 'title', //normal accessorKey
          header: 'Title',
        },
        {
          accessorKey: 'link',
          header: 'Link',
        },
        {
          accessorKey: 'dateAndTime',
          header: 'Date',
          accessorFn: (row) => {
            console.log(row)
            const date = new Date(row.dateAndTime)
            const year = date.getFullYear();
            const month = date.getMonth() + 1; // Add 1 because getMonth() returns zero-based month
            const day = date.getDate();
            
            return `${year}-${month}-${day}`;
          },
          
          Cell: ({ cell }) => (
           
              <span className="font-light text-black"> {cell.getValue()}</span>
            
          ),
          size: 150,
        },
        {
          accessorKey: 'createdByName',
          header: 'Created By',
        },
      ],
      [],
    );
    return <MaterialReactTable columns={columns} data={data ? data?.data: []} />;

  }

  const EventsTable = (data) => {
    
    
    const columns = useMemo(
      () => [
        {
          accessorKey: 'type', //access nested data with dot notation
          header: 'Type',
        },
        
        {
          accessorKey: 'title', //normal accessorKey
          header: 'Title',
        },
        {
          accessorKey: 'description',
          header: 'Description ',
        },
        {
          accessorKey: 'dateAndTime',
          header: 'Date',
          accessorFn: (row) => {
            console.log(row)
            const date = new Date(row.date)
            const year = date.getFullYear();
            const month = date.getMonth() + 1; // Add 1 because getMonth() returns zero-based month
            const day = date.getDate();
            
            return `${year}-${month}-${day}`;
          },
          
          Cell: ({ cell }) => (
          
              <span className="font-light text-black"> {cell.getValue()}</span>
            
          ),
          size: 150,
        },
        {
          accessorKey: 'createdByName',
          header: 'Created By',
        },
      ],
      [],
    );
    return <MaterialReactTable columns={columns} data={data ? data?.data: []} />;

  }
  return (
    <div className=" border-double border-2 border-slate-400 rounded-md p-2 h-80 w-96">
      <div className="card bg-slate-400 h-full rounded-md">
        <p className="card-title text-indigo-950 text-center w-full font-semibold text-2xl">{props.name}</p>
        {props.name === 'Upcoming Meetings' && (
          <div className="card-body ">
            {props?.data?.meetings?.map((item, index) => (
              <div className="meeting-item " key={index}>
              
                <p className="meeting-title  text-white font-semibold text-center"> {index+1} {item?.title}</p>
                <a className="meeting-link text-center " href={item?.link}>
                  {item?.link}
                </a>
              </div>
            ))}
          </div>
        )
        &&
         <ReportTable  data={props?.data?.meetings}/>
         }


        {props.name === 'Upcoming Events' && (
          <div className="card-body ">
            <p>You have <button className='btn btn-primary'>{props?.data?.eventsCount}</button> upcoming events</p>
            {props?.data?.events?.map((item, index) => (
              <div className="meeting-item " key={index}>
              
                <p className="meeting-title  text-white font-semibold text-center"> {index+1} {item?.title}</p>
                <a className="meeting-link text-center " href={item?.link}>
                  {item?.link}
                </a>
              </div>
            ))}
          </div>
        ) && <EventsTable data={props?.data?.events}/>}

      </div>
    </div>
  );
};

const DashboardComponent = (props) => {
  
  return (
    <section className="h-auto mt-20  w-full">
      <div className="grid w-full mx-auto max-w-7xl grid-rows-3 grid-flow-col gap-4">
        <div className="row-end-3 row-span-2 ...">
          <Box name={'Upcoming Meetings'} data={props?.data} />
        </div>
        <div className="row-start-2 row-span-2 ...">
          <Box name={'Financial Report'} data={props?.data} />
        </div>
        <div className="row-start-1 row-end-4 ...">
          <Box name={'Feedback From Mentors'} data={props?.data} />
        </div>
      </div>
      <div className="grid w-full mx-auto max-w-7xl grid-rows-3 grid-flow-col gap-4">
        <div className="row-end-3 row-span-2 ...">
          <Box name={'Upcoming Events'} data={props?.data} />
        </div>
        <div className="row-start-2 row-span-2 ...">
          <div className="w-80 h-80"></div>
        </div>
        <div className="row-start-1 row-end-4 ...">
          <Box name={'Connect to Mentors'} data={props?.data} />
        </div>
      </div>
    </section>
  )
}

export default DashboardComponent
