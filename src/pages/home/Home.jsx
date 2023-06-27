import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widgets/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'

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

        <div className="chart">
          <Featured/>
          <Chart/> 
        </div>
      </div>
    </div>
    </>
  )
}

export default Home