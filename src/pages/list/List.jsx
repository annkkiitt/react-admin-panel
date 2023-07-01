import Datatable from '../../components/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './list.scss'

import React from 'react'

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="list-container">
        <Navbar/>
        <Datatable/> 
      </div>
    </div>
  )
}

export default List