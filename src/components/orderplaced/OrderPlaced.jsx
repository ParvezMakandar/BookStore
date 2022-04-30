import React from 'react'
import FooterCopyrights from '../footer/Footer'
import BookHeader from '../header/Header'
import './OrderPlaced.css';
import order from '../../assets/orderplaced.png';
import { Table } from 'antd';
import { useHistory } from "react-router-dom";

function OrderPlaced() {
    let history=useHistory()
    const columns = [
        {
          title: 'Email us',
          dataIndex: 'email',
          key: 'email'
        },
        {
          title: 'Contact us',
          dataIndex: 'contact',
          key: 'contact',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        }]
        const data = [
            {
              key: '1',
              email: 'ask@bookstore.com',
              contact: '+91 8147340746',
              address: 'Masha Allah Building, 2nd floor, Behind petrol pump, Azam Nagar, Belgaum - 590010'
            }]
    return (
        <div>
            <BookHeader/>
            <div className="order">
                <img src={order} class="orderlogo"/>
                <div className="hurray">Hurray!!!.. your order is confirmed </div>
                <div className="hurray">the order id is #786786 save the order id for</div> 
                <div className="hurray">further communication...</div>
                <br/>
                <Table className="table" columns={columns} dataSource={data} />
                <button className="continueShopping" onClick={()=>(history.push('/'))}>CONTINUE SHOPPING</button> 
            </div>
            <FooterCopyrights/>
        </div>
    )
}

export default OrderPlaced
