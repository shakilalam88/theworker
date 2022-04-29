import React from 'react'
import FlightIcon from '@mui/icons-material/Flight';

const Outlet = () => {
  return (
    <section className="outlet">
          <h4>our advantage</h4>
          <h2>150+ product outlet in all over delhi</h2>
          <div className="col">
            <div className="left">
              <img src="./Images/delivery.jpg" alt="" />
              <FlightIcon/>
            </div>
            <div className="right">
              <h3>we make things easey and high profitable</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusamus autem aut esse aperiam magni dolor ullam, saepe fugit fugiat voluptatum neque adipisci ut dolorum!</p>
              <div className="bio-data">
                <div className="bio-data-stats">
                  <div className="bio-stats">
                    <p>TEXT 1</p>
                    <div className="bio-progress-bar bio-progress-1">
                      <span>80%</span>
                    </div>
                  </div>
                  <div className="bio-stats">
                    <p>TEXT 2</p>
                    <div className="bio-progress-bar bio-progress-2">
                      <span>70%</span>
                    </div>
                  </div>
                  <div className="bio-stats">
                    <p>TEXT 3</p>
                    <div className="bio-progress-bar bio-progress-3">
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Outlet