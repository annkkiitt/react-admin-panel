import Chart from '../../components/chart/Chart.jsx'
import Datatable from '../../components/datatable/Datatable.jsx'
import Navbar from '../../components/navbar/Navbar.jsx'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import './single.scss'

import React from 'react'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="single-container">
        <Navbar/>
        <div className="top">
          <div className="top-left">
            <h1 className='title'>Information</h1>
            <div className="item">
              <img src="https://upload.wikimedia.org/wikipedia/en/5/52/American-psycho-patrick-bateman.jpg" alt="" className="item-img" />
              <div className="details">
                <h2 className="item-title">Paterick Bateman</h2>
                <div className="detail-item">
                  <span className="item-key">Email:</span>
                  <span className="item-value">paterick@gmail.com</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Phone:</span>
                  <span className="item-value">+91-8483930284</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Address:</span>
                  <span className="item-value">Rishikesh,U.k</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Country:</span>
                  <span className="item-value">India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="top-right">
            <Chart aspect={3/1} title="User spending last 6 months"/>
          </div>
        </div>

        <div className="bottom">
          <h1 className='title'>Last Transactions</h1>
          <Datatable/>
        </div>
      </div>
    </div>
  )
}

export default Single