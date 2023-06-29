import { Person2Outlined } from '@mui/icons-material';
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Widget = ({type}) => {

  let data;
  //temporay
  let amount=2300;
  let percentage = 30;

  switch(type){
    case "users": data={
      title: "USERS",
      isMoney: false,
      link: "See all users",
      icon: (<Person2Outlined className='icon'/>)
    }
    break;
    case "orders": data={
      title: "ORDERS",
      isMoney: false,
      link: "View all order",
      icon: (<ShoppingCartCheckoutIcon className='icon'/>)
    }
    break;
    case "earnings": data={
      title: "EARNINGS",
      isMoney: true,
      link: "View net earnings",
      icon: (<MonetizationOnIcon className='icon'/>)
    }
    break;
    case "balance": data={
      title: "BALANCE",
      isMoney: true,
      link: "See details",
      icon: (<AccountBalanceIcon className='icon'/>)
    }
    break;
    default: break;
  }

  return (
    <div className='widget'>
        <div className="left">
            <div className="title">{data.title}</div>
            <div className="counter">{data.isMoney && "$"}{amount}</div>
            <div className="link">{data.link}</div>
        </div>

        <div className="right">
            <div className="percentage positive">
            <KeyboardArrowUpIcon/>
                {percentage}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget