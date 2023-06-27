import { KeyboardArrowDown, KeyboardArrowUpOutlined } from '@mui/icons-material';
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <div className="title">Total Revenue</div>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text='70'/>
            </div>
            <p className="title">Total Sales made today</p>
            <p className="amount">$200</p>
            <p className="desc">Previous transaction processing.Last payment may not be included.</p>

            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlined/>
                        <div className="resultAmount">$12.3k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDown />
                        <div className="resultAmount">$12.3k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDown />
                        <div className="resultAmount">$12.3k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured