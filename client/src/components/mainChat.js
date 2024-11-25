import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Chart from '../chart.js';
import group2 from '../images/Group2.png';
import group3 from '../images/Group3.png';
import group4 from '../images/Group4.png';
import group5 from '../images/Group5.png';
import arrowup from '../images/arrow-up.png';
import arrowdown from '../images/arrowup.png';
import graph1 from '../images/graph1.png';
import live1 from '../images/live1.png';
import bitcoin from '../images/bitcoin.png';
import litecoin from '../images/litecoin.png';
import cardano from '../images/cardano.png';
import graph2 from '../images/graph2.png';
import graph3 from '../images/graph3.png';
import trans1 from '../images/trans1.png';
import trans2 from '../images/trans2.png';



function mainChat() {
  return (
    <div className='container-fluid'>
      <div className="row">
        {/* Left Column - 4 Boxes (2 on top, 2 on bottom) */}
        <div className="col-md-6">
          <div className="row">
            {/* Top Boxes */}
            <div className="col-6 box">
              <img src={group2} alt="group 2" className='box-img' /> <span className='percent'>
                <img src={arrowup} alt="group 2" />
                +0.25%
              </span>
              <p className='amount'>$40,291</p>
              <div className="coin">Bitcoin - BTC</div>
            </div>
            <div className="col-6 box">
              <img src={group3} alt="group 2" className='box-img' /> <span className='percent'>
                <img src={arrowup} alt="group 2" />
                +0.25%
              </span>
              <p className='amount'>$18,291</p>
              <div className="coin">Etherum - ETH</div>
            </div>
          </div>
          <div className="row">
            {/* Bottom Boxes */}
            <div className="col-6 box">
              <img src={group5} alt="group 2" className='box-img' /> <span className='percent'>
                <img src={arrowup} alt="group 2" />
                +0.25%
              </span>
              <p className='amount'>$8,291</p>
              <div className="coin">Litcoin - LTL</div>
            </div>
            <div className="col-6 box">
              <img src={group4} alt="group 2" className='box-img' /> <span className='percent1'>
                <img src={arrowdown} alt="group 2" />
                -2,05%
              </span>
              <p className='amount'>$3,291</p>
              <div className="coin">Cardona - ADA</div>
            </div>
          </div>
        </div>

        {/* Right Column - Chart Component */}
        <div className="col-md-6">
          <div className="row">
            <div className="col-12 chart-box">
              <Chart className="chart-container" />

            </div>
          </div>
        </div>
      </div>


      <div className="row">
        {/* Left Column - 4 Boxes (2 on top, 2 on bottom) */}
        <div className="col-md-8 live-market">
          <h1 className='lives'>Live Market</h1>
          <div className="row">
            <div className="col-3">
              <div className="user-details d-flex align-items-center">
                <img src={live1} alt="user" className="user-image" />
                <div className="ms-3">
                  <p className="name mb-0">Etherenum</p>
                  <p className="email coin">ETH / USDT</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <span className="coin">Change</span>
              <br />
              <span className='percents'>+14.02%</span>
            </div>
            <div className="col-3">
              <span className="coin">Price</span>
              <br />
              <span className='price'>39,785 USD</span>
            </div>
            <div className="col-3">
              <img src={graph1} alt='arrow-down' className='arrow' />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="user-details d-flex align-items-center">
                <img src={bitcoin} alt="user" className="user-image" />
                <div className="ms-3">
                  <p className="name mb-0">Bitcoin</p>
                  <p className="email coin">ETH / USDT</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <span className="coin">Change</span>
              <br />
              <span className='percents'>+4.02%</span>
            </div>
            <div className="col-3">
              <span className="coin">Price</span>
              <br />
              <span className='price'>21,786 USD</span>
            </div>
            <div className="col-3">
              <img src={graph2} alt='arrow-down' className='arrow' />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="user-details d-flex align-items-center">
                <img src={litecoin} alt="user" className="user-image" />
                <div className="ms-3">
                  <p className="name mb-0">Litecoin</p>
                  <p className="email coin">ITC / USDT</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <span className="coin">Change</span>
              <br />
              <span className='percents1'>-4.02%</span>
            </div>
            <div className="col-3">
              <span className="coin">Price</span>
              <br />
              <span className='price'>9,786 USD</span>
            </div>
            <div className="col-3">
              <img src={graph1} alt='arrow-down' className='arrow' />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="user-details d-flex align-items-center">
                <img src={cardano} alt="user" className="user-image" />
                <div className="ms-3">
                  <p className="name mb-0">Cardano</p>
                  <p className="email coin">ADA / USDT</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <span className="coin">Change</span>
              <br />
              <span className='percents'>+0.02%</span>
            </div>
            <div className="col-3">
              <span className="coin">Price</span>
              <br />
              <span className='price'>4,786 USD</span>
            </div>
            <div className="col-3">
              <img src={graph3} alt='arrow-down' className='arrow' />
            </div>
          </div>
        </div>

        {/* Right Column - Chart Component */}
        <div className="col-md-4 trans-box ">
          <h1 className='lives'>Transactions</h1>
          <div className="row">
            <div className="col-6">
              <div className="user-details d-flex align-items-center">
                <img src={trans2} alt="user" className="user-image" />
                <div className="ms-3">
                  <p className="name mb-0">Ethereumm</p>
                  <p className="email coin">Received</p>
                </div>
              </div>
            </div>
            <div className="col-6 ">
              <span className="price">$24,102</span>
              <br />
              <span className='coin'>Today, 19:30</span>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="user-details d-flex align-items-center">
                <img src={trans1} alt="user" className="user-image" />
                <div className="ms-3">
                  <p className="name mb-0">Bitcoin</p>
                  <p className="email coin">Buy</p>
                </div>
              </div>
            </div>
            <div className="col-6 ">
              <span className="price">$4,157</span>
              <br />
              <span className='coin'>Today, 14:32</span>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="user-details d-flex align-items-center">
                <img src={trans1} alt="user" className="user-image" />
                <div className="ms-3">
                  <p className="name mb-0">Bitcoin</p>
                  <p className="email coin">Buy</p>
                </div>
              </div>
            </div>
            <div className="col-6 ">
              <span className="price">$64,784</span>
              <br />
              <span className='coin'>Today, 13:50</span>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="user-details d-flex align-items-center">
                <img src={trans1} alt="user" className="user-image" />
                <div className="ms-3">
                  <p className="name mb-0">Litecoin</p>
                  <p className="email coin">Buy</p>
                </div>
              </div>
            </div>
            <div className="col-6 ">
              <span className="price">$14,265</span>
              <br />
              <span className='coin'>Today, 19:38</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default mainChat;
