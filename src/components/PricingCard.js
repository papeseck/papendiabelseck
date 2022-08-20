import "./PricingCardStyle.css"
import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc"> $ 100</p>
                <p>- 3Days -</p>
                <p>-3pages-</p>
                <p>-featured-</p>
                <p>-Responsives Design-</p>
                <Link to="/contact" className="btn"> PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>- Preminieum -</h3>
                <span className="bar"></span>
                <p className="btc"> $ 200</p>
                <p>- 2Days -</p>
                <p>-5pages-</p>
                <p>-featured-</p>
                <p>-Responsives Design-</p>
                <Link to="/contact" className="btn"> PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>- Business -</h3>
                <span className="bar"></span>
                <p className="btc"> $ 300</p>
                <p>- 5 Days -</p>
                <p>-8 pages-</p>
                <p>-featured-</p>
                <p>-Responsives Design-</p>
                <Link to="/contact" className="btn"> PURCHASE NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard