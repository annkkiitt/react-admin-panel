import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widgets/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Tables from '../../components/table/Table'

const Home = () => {
  return (
    <>
    <div className='home'>
      <Sidebar/>
      <div className="container">
        <Navbar/>
        <div className="widgets">
          <Widget type="users"/>
          <Widget type="orders"/>
          <Widget type="earnings"/>
          <Widget type="balance"/>
        </div>

        <div className="charts">
          <Featured/>
          <Chart title="Last 6 Months (Revenue)" aspect={2/1}/> 
        </div>

        <div className="listContainer">
          <div className="list-title">Latest transaction</div>
          <Tables/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home