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
          <div className="row">
            <div className="col-3">
              hello
            </div>
            <div className="col-3">
              hello
            </div>
            <div className="col-3">
              hello
            </div>
            <div className="col-3">
              hello
            </div>
          </div>
        </div>

        {/* Right Column - Chart Component */}
        <div className="col-md-4 trans-box ">
          <h2>Transactions</h2>
          <div className="row">
            <div className="col-6">
              world
            </div>
            <div className="col-6 ">
              world
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default mainChat;
