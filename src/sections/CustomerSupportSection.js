import React from 'react'
import credit from '../assets/images/credit-card.svg';
import customer from '../assets/images/customer-service.svg';
import delivery from '../assets/images/delivery-truck.svg';
import deliveryitem from '../assets/images/delivery-truck.svg';

const CustomerSupportSection = () => {
  return (
    <section className="info">
        <div className="container">
            <div className="info-box">
                <img src={customer} className="s" alt="Free shipping" />
                <div>
                    <h5>Customer Support</h5>
                    <p>Village did removed enjoyed <span>explain talking.</span> </p>
                </div>
            </div>
            <div className="info-box">
                <img src={credit} className="s" alt="24/7 support" />
                <div>
                    <h5>Secured Payment</h5>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
            <div className="info-box">
                <img src={deliveryitem} className="s" alt="Online payment" />
                <div>
                    <h5>Free Home Delivery</h5>
                    <p>Village did removed enjoyed <span>explain talking.</span></p>
                </div>
            </div>
            <div className="info-box">
                <img src={delivery} className="s" alt="Fast delivery" />
                <div>
                    <h5>30 Days Reuters</h5>
                    <p>Village did removed enjoyed <span>explain talking.</span></p>
                </div>
            </div>
        </div>
   
    </section>
  )
}

export default CustomerSupportSection