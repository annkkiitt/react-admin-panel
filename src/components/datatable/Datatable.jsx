import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';

const Datatable = () => {
    const actionColumn = [{field: "action",headerfield: "Action",width: 200,renderCell: ()=>{
        return(
        <div className="cellAction">
            <Link to="/users/123" style={{textDecoration: "none"}} >
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
        </div>
        )
    }}]

  return (
    <div className='datatable'>
        <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[8, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable