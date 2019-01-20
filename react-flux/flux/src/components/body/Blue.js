import React, { Component } from 'react'

export default class Blue extends Component {
  render () {
    return (
      <div className='row'>
        <div className='col-12'>
          <div className='card-group'>
            <div className='col-1' />
            <div className='col-5'>
              <div className='card'>
                <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
                  <ol className='carousel-indicators'>
                    <li data-target='#carouselExampleIndicators' data-slide-to='0' className='active' />
                    <li data-target='#carouselExampleIndicators' data-slide-to='1' />
                    <li data-target='#carouselExampleIndicators' data-slide-to='2' />
                  </ol>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <img className='d-block w-100' src='https://via.placeholder.com/250x250' alt='First slide' />
                    </div>
                    <div className='carousel-item'>
                      <img className='d-block w-100' src='https://via.placeholder.com/250x250' alt='Second slide' />
                    </div>
                    <div className='carousel-item'>
                      <img className='d-block w-100' src='https://via.placeholder.com/250x250' alt='Third slide' />
                    </div>
                  </div>
                  <a className='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true' />
                    <span className='sr-only'>Previous</span>
                  </a>
                  <a className='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true' />
                    <span className='sr-only'>Next</span>
                  </a>
                </div>
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className='card-footer'>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            
            <div className='col-5'>
              <div className='card'>
                <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
                  <ol className='carousel-indicators'>
                    <li data-target='#carouselExampleIndicators' data-slide-to='0' className='active' />
                    <li data-target='#carouselExampleIndicators' data-slide-to='1' />
                    <li data-target='#carouselExampleIndicators' data-slide-to='2' />
                  </ol>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <img className='d-block w-100' src='https://via.placeholder.com/250x250' alt='First slide' />
                    </div>
                    <div className='carousel-item'>
                      <img className='d-block w-100' src='https://via.placeholder.com/250x250' alt='Second slide' />
                    </div>
                    <div className='carousel-item'>
                      <img className='d-block w-100' src='https://via.placeholder.com/250x250' alt='Third slide' />
                    </div>
                  </div>
                  <a className='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true' />
                    <span className='sr-only'>Previous</span>
                  </a>
                  <a className='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true' />
                    <span className='sr-only'>Next</span>
                  </a>
                </div>
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className='card-footer'>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className='col-1' />
            <br />

            
          </div>
        </div>
      </div>
    )
  }
}
