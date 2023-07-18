import { Link, useLocation } from 'react-router-dom';
import { userColumns, userRows } from '../../datatablesource';
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';

const Datatable = () => {
  // const location = useLocation()
  // const path = location.pathname.split('/')[1]

  const actionColumn = [{
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to='/users/test' style={{textDecoration: "none"}}>
            <div className="viewButton">View</div>
          </Link>
          <div className="deleteButton">Delete</div>
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
        rows={userRows}
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