import React from 'react';
// import car1 from './images/Most Searched Car/car-2.jpg';
// import car2 from './images/Most Searched Car/car-3.jpg';
import MostSearchedCarsTab from './MostSearchedCarsTab/MostSearchedCarsTab';
// import car3 from './images/Most Searched Car/car-4.jpg';


function MostSearchedCars() {
  return (
    <>
    <div className="featured-car content-area slide-box-2 bg-grea-4 background-for-sec">
    <div className="container">
        <div className="main-title py-3">
            <h1 className='h3-font-size h1-phone text-start'>The most searched cars</h1>
        </div>
        <MostSearchedCarsTab/>
    </div>
</div>
    </>
  )
}

export default MostSearchedCars