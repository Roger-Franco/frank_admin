import { Link, useLocation } from 'react-router-dom';
import { userColumns, userRows } from '../../datatablesource';
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { FilterDrama } from '@mui/icons-material';

const Datatable = () => {
  const [data, setData] = useState(userRows)
  // const location = useLocation()
  // const path = location.pathname.split('/')[1]

  const handleDelete = (id) => {
    const filteredData = data.filter((item) => item.id !== id)
    setData(filteredData)
  }
  console.log(data, 'data')

  const actionColumn = [{
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to='/users/test' style={{textDecoration: "none"}}>
            <div className="viewButton">View</div>
          </Link>
          <div onClick={() => handleDelete(params.row.id)} className="deleteButton">Delete</div>
        </div>
      );
    },
  }]

  return (
    <div className='datatable'>
      <div className="datatableTitle">
        {/* {path} */} Users
        <Link to='/users/new' className='link'>
         Add New
        </Link>
      </div>
      <DataGrid
      className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable