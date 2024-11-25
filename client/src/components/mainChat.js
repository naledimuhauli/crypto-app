import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Chart from '../chart.js';

function mainChat() {
  return (
    <div className='container-fluid'>
      <div className="row">
        {/* Left Column - 4 Boxes (2 on top, 2 on bottom) */}
        <div className="col-md-6">
          <div className="row">
            {/* Top Boxes */}
            <div className="col-6">hello</div>
            <div className="col-6">world</div>
          </div>
          <div className="row">
            {/* Bottom Boxes */}
            <div className="col-6">siphokazi</div>
            <div className="col-6">muhauli</div>
          </div>
        </div>

        {/* Right Column - Chart Component */}
        <div className="col-md-6">
          <div className="row">
            <div className="col-12">
              <Chart className="chart-container" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default mainChat;
