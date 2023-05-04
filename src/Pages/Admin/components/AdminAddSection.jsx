import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import AdminManageTable from './AdminManageTable';
import { API } from '../../../Api/Post';
import Spinner from '../../../components/Layout/Spinner';

const AdminAddSection = () => {
  const { state } = useContext(AuthContext);
  const [tableData, setTableData] = useState(null);

  const fetchData = () => {
    API('get', 'admin/get-all-admin', {}, state.token)
      .then((res) => {
        setTableData(res.data.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="all-applications-wrapper">
        <div className="all-applications-body">
          {tableData ? (
            <AdminManageTable data={tableData} refetch={fetchData} />
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAddSection;
