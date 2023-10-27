import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Others(props) {


  const [cardetails, setcardetails] = useState([])

  const GetData = async () => {
    const res = await fetch(`/getnewonecardata/${props.model}/${props.version}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      console.log("Invalid Input");
    } else {
      setcardetails(data)
    }

  }



  useEffect(() => {
    GetData();
  }, []);


  return (
    <Accordion>
    {cardetails.length > 0 ? <Accordion.Item eventKey="0">
        <Accordion.Header><b>Other Details</b></Accordion.Header>
        <Accordion.Body>
          <div className={`row spec-data ${cardetails[0].acceleration_kmph === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Acceleration (0-100 kmph)</div>
            <div className='col-6 '>{cardetails[0].acceleration_kmph === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].acceleration_kmph}</div>
          </div>
          {/* <div className='row spec-data'>
            <div className='col-6'>0-100 kmph</div>
            <div className='col-6 '>{cardetails[0].0-100kmph==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].0-100kmph}</div>
          </div> */}
          {/* <div className='row spec-data'>
            <div className='col-6'>0-60kmph</div>
            <div className='col-6 '>{cardetails[0].0-60kmph==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].0-60kmph}</div>
          </div> */}
          {/* <div className='row spec-data'>
            <div className='col-6'>360_view_camera</div>
            <div className='col-6 '>{cardetails[0].360_view_camera==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].360_view_camera}</div>
          </div> */}
          {/* <div className='row spec-data'>
            <div className='col-6'>3rd_gear_(30-80kmph)</div>
            <div className='col-6 '>{cardetails[0].3rd_gear_(30-80kmph)==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].3rd_gear_(30-80kmph)}</div>
          </div> */}
          {/* <div className='row spec-data'>
            <div className='col-6'>Acceleration (0-100 kmph)</div>
            <div className='col-6 '>{cardetails[0].4th_gear_(40-100kmph)==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].4th_gear_(40-100kmph)}</div>
          </div> */}
          <div className={`row spec-data ${cardetails[0].accessory_power_outlet === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Accessory Power Outlet</div>
            <div className='col-6 '>{cardetails[0].accessory_power_outlet === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].accessory_power_outlet}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].active_noise_cancellation === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Active Noise Cancellation</div>
            <div className='col-6 '>{cardetails[0].active_noise_cancellation === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].active_noise_cancellation}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].additional_features === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Additional Features</div>
            <div className='col-6 '>{cardetails[0].additional_features === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].additional_features}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].adjustable_headlights === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Adjustable Headlights</div>
            <div className='col-6 '>{cardetails[0].adjustable_headlights === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].adjustable_headlights}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].adjustable_seats === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Adjustable Seats</div>
            <div className='col-6 '>{cardetails[0].adjustable_seats === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].adjustable_seats}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].advance_safety_features === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Advance Safety Features</div>
            <div className='col-6 '>{cardetails[0].advance_safety_features === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].advance_safety_features}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].air_quality_control === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Air Quality Control</div>
            <div className='col-6 '>{cardetails[0].air_quality_control === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].air_quality_control}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].alloy_wheel_size === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Alloy Wheel Size</div>
            <div className='col-6 '>{cardetails[0].alloy_wheel_size === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].alloy_wheel_size}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].alloy_wheels === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Alloy Wheels</div>
            <div className='col-6 '>{cardetails[0].alloy_wheels === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].alloy_wheels}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].android_auto === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Android Auto</div>
            <div className='col-6 '>{cardetails[0].android_auto === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].android_auto}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].android_auto === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Anti-Pinch Power Windows</div>
            <div className='col-6 '>{cardetails[0].android_auto === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].android_auto}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].anti_theft_device === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Anti Theft Device</div>
            <div className='col-6 '>{cardetails[0].anti_theft_device === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].anti_theft_device}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].audio_system_remote_control === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Audio System Remote Control</div>
            <div className='col-6 '>{cardetails[0].audio_system_remote_control === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].audio_system_remote_control}</div>
          </div>




          <div className={`row spec-data ${cardetails[0].automatic_climate_control === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Automatic Climate Control</div>
            <div className='col-6 '>{cardetails[0].automatic_climate_control === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].automatic_climate_control}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].battery_saver === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Battery Saver</div>
            <div className='col-6 '>{cardetails[0].battery_saver === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].battery_saver}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].body_type === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Body Type</div>
            <div className='col-6 '>{cardetails[0].body_type === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].body_type}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].bore_x_stroke === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Bore Stroke</div>
            <div className='col-6 '>{cardetails[0].bore_x_stroke === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].bore_x_stroke}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].braking_onehundred_zero_kmph === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Braking (100-0)kmph </div>
            <div className='col-6 '>{cardetails[0].braking_onehundred_zero_kmph === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].braking_onehundred_zero_kmph}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].braking_sixty_zero_kmph === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Braking (60-0)kmph</div>
            <div className='col-6 '>{cardetails[0].braking_sixty_zero_kmph === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].braking_sixty_zero_kmph}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].braking_eighty_zero_kmph === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Braking (80-0)kmph</div>
            <div className='col-6 '>{cardetails[0].braking_eighty_zero_kmph === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].braking_eighty_zero_kmph}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].cd_changer === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>CD Changer</div>
            <div className='col-6 '>{cardetails[0].cd_changer === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cd_changer}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].cd_player === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>CD Player</div>
            <div className='col-6 '>{cardetails[0].cd_player === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cd_player}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].central_console_armrest === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Central Console Armrest   </div>
            <div className='col-6 '>{cardetails[0].central_console_armrest === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].central_console_armrest}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].centrally_mounted_fuel_tank === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Centrally Mounted Fuel Tank</div>
            <div className='col-6 '>{cardetails[0].centrally_mounted_fuel_tank === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].centrally_mounted_fuel_tank}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].charging_time_a_c === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Charging Time (AC)</div>
            <div className='col-6 '>{cardetails[0].charging_time_a_c === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].charging_time_a_c}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].charging_time_d_c === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Charging Time(DC)</div>
            <div className='col-6 '>{cardetails[0].charging_time_d_c === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].charging_time_d_c}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].chrome_garnish === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Chrome Garnish</div>
            <div className='col-6 '>{cardetails[0].chrome_garnish === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].chrome_garnish}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].chrome_grille === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Chrome Grille</div>
            <div className='col-6 '>{cardetails[0].chrome_grille === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].chrome_grille}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].city_driveability_twenty_eighty_kmph === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>City Driveability(20-80)kmph</div>
            <div className='col-6 '>{cardetails[0].city_driveability_twenty_eighty_kmph === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].city_driveability_twenty_eighty_kmph}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].clutch_lock === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Clutch Lock</div>
            <div className='col-6 '>{cardetails[0].clutch_lock === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].clutch_lock}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].clutchtype === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Clutch Type</div>
            <div className='col-6 '>{cardetails[0].clutchtype === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].clutchtype}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].cng_fuel_tank_capacity_litres === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>CNG Fuel Tank Capacity Litres</div>
            <div className='col-6 '>{cardetails[0].cng_fuel_tank_capacity_litres === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cng_fuel_tank_capacity_litres}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].cng_highway_mileage === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>CNG Highway Mileage</div>
            <div className='col-6 '>{cardetails[0].cng_highway_mileage === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cng_highway_mileage}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].cng_mileage_arai === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>CNG Mileage(ARAI)</div>
            <div className='col-6 '>{cardetails[0].cng_mileage_arai === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cng_mileage_arai}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].compass === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Compass</div>
            <div className='col-6 '>{cardetails[0].compass === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].compass}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].connectivity === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Connectivity</div>
            <div className='col-6 '>{cardetails[0].connectivity === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].connectivity}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].cornering_foglamps === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Cornering Foglamps</div>
            <div className='col-6 '>{cardetails[0].cornering_foglamps === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cornering_foglamps}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].crash_sensor === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Crash Sensor</div>
            <div className='col-6 '>{cardetails[0].crash_sensor === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].crash_sensor}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].cruise_control === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Cruise Control</div>
            <div className='col-6 '>{cardetails[0].cruise_control === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cruise_control}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].cup_holders_front === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>CUP Holders Front</div>
            <div className='col-6 '>{cardetails[0].cup_holders_front === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cup_holders_front}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].cup_holders_rear === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>CUP Holders Rear  </div>
            <div className='col-6 '>{cardetails[0].cup_holders_rear === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cup_holders_rear}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].day_night_rear_view_mirror === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Day Night Rear View Mirror</div>
            <div className='col-6 '>{cardetails[0].day_night_rear_view_mirror === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].day_night_rear_view_mirror}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].diesel_fuel_tank_capacity_litres === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Diesel Fuel Tank Capacity Litres</div>
            <div className='col-6 '>{cardetails[0].diesel_fuel_tank_capacity_litres === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].diesel_fuel_tank_capacity_litres}</div>
          </div>

          <div className={`row spec-data ${cardetails[0].diesel_highway_mileage === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Diesel Highway Mileage</div>
            <div className='col-6 '>{cardetails[0].diesel_highway_mileage === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].diesel_highway_mileage}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].diesel_mileage_arai === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Diesel Mileage (ARAI)</div>
            <div className='col-6 '>{cardetails[0].diesel_mileage_arai === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].diesel_mileage_arai}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].diesel_overall_mileage === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Diesel Overall Mileage</div>
            <div className='col-6 '>{cardetails[0].diesel_overall_mileage === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].diesel_overall_mileage}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].digital_clock === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Digital Clock</div>
            <div className='col-6 '>{cardetails[0].digital_clock === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].digital_clock}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].digital_odometer === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Digital Odometer</div>
            <div className='col-6 '>{cardetails[0].digital_odometer === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].digital_odometer}</div>
          </div>

          <div className={`row spec-data ${cardetails[0].drag_coefficient === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Drag Coefficient</div>
            <div className='col-6 '>{cardetails[0].drag_coefficient === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].drag_coefficient}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].drive_type === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Drive Type</div>
            <div className='col-6 '>{cardetails[0].drive_type === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].drive_type}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].driver_airbag === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Driver Airbag</div>
            <div className='col-6 '>{cardetails[0].driver_airbag === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].driver_airbag}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].driving_experience_control_eco === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Driving Experience Control_eco  </div>
            <div className='col-6 '>{cardetails[0].driving_experience_control_eco === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].driving_experience_control_eco}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].dual_tone_body_colour === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Dual Tone Body Colour   </div>
            <div className='col-6 '>{cardetails[0].dual_tone_body_colour === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].dual_tone_body_colour}</div>
          </div>

          <div className={`row spec-data ${cardetails[0].dual_tone_dashboard === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Dual Tone Dashboard</div>
            <div className='col-6 '>{cardetails[0].dual_tone_dashboard === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].dual_tone_dashboard}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].electric_adjustable_seats === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Electric Adjustable Seats</div>
            <div className='col-6 '>{cardetails[0].electric_adjustable_seats === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].electric_adjustable_seats}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].electric_folding_rear_view_mirror === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Electric Folding Rear View Mirror</div>
            <div className='col-6 '>{cardetails[0].electric_folding_rear_view_mirror === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].electric_folding_rear_view_mirror}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].electronic_multi_tripmeter === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Electronic Multi Tripmeter</div>
            <div className='col-6 '>{cardetails[0].electronic_multi_tripmeter === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].electronic_multi_tripmeter}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].electronic_stability_control === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Electronic Stability Control</div>
            <div className='col-6 '>{cardetails[0].electronic_stability_control === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].electronic_stability_control}</div>
          </div>

          <div className={`row spec-data ${cardetails[0].emission_control_system === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Emission Control System</div>
            <div className='col-6 '>{cardetails[0].emission_control_system === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].emission_control_system}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].emission_norm_compliance === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'> Emission Norm Compliance </div>
            <div className='col-6 '>{cardetails[0].emission_norm_compliance === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].emission_norm_compliance}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].engine_check_warning === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Eengine Check Warning</div>
            <div className='col-6 '>{cardetails[0].engine_check_warning === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].engine_check_warning}</div>
          </div>
          {/* <div className='row spec-data'>
            <div className='col-6'>     </div>
            <div className='col-6 '>{cardetails[0].electric_adjustable_seats==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].electric_adjustable_seats}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>     </div>
            <div className='col-6 '>{cardetails[0].electric_adjustable_seats==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].electric_adjustable_seats}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>     </div>
            <div className='col-6 '>{cardetails[0].electric_adjustable_seats==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].electric_adjustable_seats}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>     </div>
            <div className='col-6 '>{cardetails[0].electric_adjustable_seats==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].electric_adjustable_seats}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>     </div>
            <div className='col-6 '>{cardetails[0].electric_adjustable_seats==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].electric_adjustable_seats}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>     </div>
            <div className='col-6 '>{cardetails[0].electric_adjustable_seats==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].electric_adjustable_seats}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>     </div>
            <div className='col-6 '>{cardetails[0].electric_adjustable_seats==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].electric_adjustable_seats}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>     </div>
            <div className='col-6 '>{cardetails[0].electric_adjustable_seats==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].electric_adjustable_seats}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>     </div>
            <div className='col-6 '>{cardetails[0].electric_adjustable_seats==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].electric_adjustable_seats}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>     </div>
            <div className='col-6 '>{cardetails[0].electric_adjustable_seats==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].electric_adjustable_seats}</div>
          </div> */}




          <div className={`row spec-data ${cardetails[0].engine_check_warning === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Mild Hybrid</div>
            <div className='col-6 '>{cardetails[0].mild_hybrid === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].mild_hybrid}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].mirror_link === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Mirror Link</div>
            <div className='col-6 '>{cardetails[0].mirror_link === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].mirror_link}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].model_name === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Model Name</div>
            <div className='col-6 '>{cardetails[0].model_name === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].model_name}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].motor_type === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Motor Type</div>
            <div className='col-6 '>{cardetails[0].motor_type === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].motor_type}</div>
          </div>
          {/* <div className="row spec-data">
                <div className="col-6">Multy Function Steering Wheel</div>
                <div className='col-6 '>{cardetails[0].multi-function_steering_wheel==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].multi-function_steering_wheel}</div>
            </div> */}
          <div className={`row spec-data ${cardetails[0].navigation_system === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Navigation System</div>
            <div className='col-6 '>{cardetails[0].navigation_system === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].navigation_system}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].no_of_airbags === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">No of Aribags</div>
            <div className='col-6 '>{cardetails[0].no_of_airbags === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].no_of_airbags}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].no_of_doors === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">No of Doors</div>
            <div className='col-6 '>{cardetails[0].no_of_doors === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].no_of_doors}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].no_of_speakers === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">No of Speakers</div>
            <div className='col-6 '>{cardetails[0].no_of_speakers === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].no_of_speakers}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].outside_rear_view_mirror_turn_indicators === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Outside Rear View Mirror Turn Indicators</div>
            <div className='col-6 '>{cardetails[0].outside_rear_view_mirror_turn_indicators === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].outside_rear_view_mirror_turn_indicators}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].outside_temperature_display === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Outside Temperature Display</div>
            <div className='col-6 '>{cardetails[0].outside_temperature_display === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].outside_temperature_display}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].passenger_airbag === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Passenger Airbag</div>
            <div className='col-6 '>{cardetails[0].passenger_airbag === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].passenger_airbag}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].passenger_side_rear_view_mirror === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Passenger Side Rear View Mirror</div>
            <div className='col-6 '>{cardetails[0].passenger_side_rear_view_mirror === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].passenger_side_rear_view_mirror}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].petrol_city_mileage === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Petrol City Mileage</div>
            <div className='col-6 '>{cardetails[0].petrol_city_mileage === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].petrol_city_mileage}</div>
          </div>
          {/* <div className="row spec-data">
                <div className="col-6">Petrol Fuel Tank Capacity (litres)</div>
                <div className='col-6 '>{cardetails[0].petrol_fuel_tank_capacity_(litres)==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].petrol_fuel_tank_capacity_(litres)}</div>
            </div> */}
          <div className={`row spec-data ${cardetails[0].petrol_highway_mileage === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Petrol Highway Mileage</div>
            <div className='col-6 '>{cardetails[0].petrol_highway_mileage === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].petrol_highway_mileage}</div>
          </div>
          {/* <div className="row spec-data">
                <div className="col-6">Petrol Mileage (arai)</div>
                <div className='col-6 '>{cardetails[0].petrol_mileage_(arai)==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].petrol_mileage_(arai)}</div>
            </div> */}
          {/* <div className="row spec-data">
                <div className="col-6">Petrol Mileage (wltp)</div>
                <div className='col-6 '>{cardetails[0].petrol_mileage_(wltp)==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].petrol_mileage_(wltp)}</div>
            </div> */}
          <div className={`row spec-data ${cardetails[0].power_adjustable_exterior_rear_view_mirror === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Power Adjustable Exterior Rear View Mirror</div>
            <div className='col-6 '>{cardetails[0].power_adjustable_exterior_rear_view_mirror === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].power_adjustable_exterior_rear_view_mirror}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].power_antenna === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Power Antenna</div>
            <div className='col-6 '>{cardetails[0].power_antenna === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].power_antenna}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].power_boot === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Power Boot</div>
            <div className='col-6 '>{cardetails[0].power_boot === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].power_boot}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].power_door_locks === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Power Door Locks</div>
            <div className='col-6 '>{cardetails[0].power_door_locks === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].power_door_locks}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].power_folding_thrid_row_seat === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Power Folding 3rd Row Seat</div>
            <div className='col-6 '>{cardetails[0].power_folding_thrid_row_seat === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].power_folding_thrid_row_seat}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].power_windows_front === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Power Windows Front</div>
            <div className='col-6 '>{cardetails[0].power_windows_front === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].power_windows_front}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].power_windows_rear === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Power Windows Rear</div>
            <div className='col-6 '>{cardetails[0].power_windows_rear === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].power_windows_rear}</div>
          </div>
          {/* <div className="row spec-data">
                <div className="col-6">Pretensioners & Force Limiter Seatbelts</div>
                <div className='col-6 '>{cardetails[0].pretensioners_&_force_limiter_seatbelts==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].pretensioners_&_force_limiter_seatbelts}</div>
            </div> */}
          <div className={`row spec-data ${cardetails[0].quarter_mile === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Quarter Mile</div>
            <div className='col-6 '>{cardetails[0].quarter_mile === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].quarter_mile}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].radio === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Radio</div>
            <div className='col-6 '>{cardetails[0].radio === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].radio}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].range === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Range</div>
            <div className='col-6 '>{cardetails[0].range === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].range}</div>
          </div>
          {/* <div className="row spec-data">
                <div className="col-6">Real-time Vehicle Tracking</div>
                <div className='col-6 '>{cardetails[0].real-time_vehicle_tracking==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].real-time_vehicle_tracking}</div>
            </div> */}
          <div className={`row spec-data ${cardetails[0].rear_ac_vents === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Rear Ac Vents</div>
            <div className='col-6 '>{cardetails[0].rear_ac_vents === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].rear_ac_vents}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].rear_camera === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Rear Camera</div>
            <div className='col-6 '>{cardetails[0].rear_camera === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].rear_camera}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].rear_entertainment_system === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Rear Entertainment System</div>
            <div className='col-6 '>{cardetails[0].rear_entertainment_system === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].rear_entertainment_system}</div>
          </div>
          {/* <div className="row spec-data">
                <div className="col-6">Rear Headroom (mm)</div>
                <div className='col-6 '>{cardetails[0].rear_headroom_(mm)==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].rear_headroom_(mm)}</div>
            </div> */}
          {/* <div className="row spec-data">
                <div className="col-6">Rear Legroom (mm)</div>
                <div className='col-6 '>{cardetails[0].rear_legroom_(mm)==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].rear_legroom_(mm)}</div>
            </div> */}
          <div className={`row spec-data ${cardetails[0].rear_seat_centre_arm_rest === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Rear Seat Centre Arm Rest</div>
            <div className='col-6 '>{cardetails[0].rear_seat_centre_arm_rest === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].rear_seat_centre_arm_rest}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].rear_seat_headrest === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Rear Seat Headrest</div>
            <div className='col-6 '>{cardetails[0].rear_seat_headrest === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].rear_seat_headrest}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].rear_shoulder_room === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Rear Shoulder Room</div>
            <div className='col-6 '>{cardetails[0].rear_shoulder_room === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].rear_shoulder_room}</div>
          </div>
          {/* <div className="row spec-data">
                <div className="col-6">Rear Tread (mm)</div>
                <div className='col-6 '>{cardetails[0].rear_tread_(mm)==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].rear_tread_(mm)}</div>
            </div> */}
          <div className={`row spec-data ${cardetails[0].rear_window_washer === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Rear Window Washer</div>
            <div className='col-6 '>{cardetails[0].rear_window_washer === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].rear_window_washer}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].rear_window_wiper === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Rear Window Wiper</div>
            <div className='col-6 '>{cardetails[0].rear_window_wiper === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].rear_window_wiper}</div>
          </div>
          {/* <div className="row spec-data">
                <div className="col-6">Remote Climate Control (A C)</div>
                <div className='col-6 '>{cardetails[0].remote_climate_control_(a_c)==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].remote_climate_control_(a_c)}</div>
            </div> */}
          <div className={`row spec-data ${cardetails[0].remote_engine_start_stop === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Remote Engine Start Stop</div>
            <div className='col-6 '>{cardetails[0].remote_engine_start_stop === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].remote_engine_start_stop}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].remote_fuel_lid_opener === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Remote Fuel Lid Opener</div>
            <div className='col-6 '>{cardetails[0].remote_fuel_lid_opener === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].remote_fuel_lid_opener}</div>
          </div>
          {/* <div className="row spec-data">
                <div className="col-6">Remote Horn & Light Control</div>
                <div className='col-6 '>{cardetails[0].remote_horn_&_light_control==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].remote_horn_&_light_control}</div>
            </div> */}
          <div className={`row spec-data ${cardetails[0].remote_trunk_opener === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Remote Trunk Opener</div>
            <div className='col-6 '>{cardetails[0].remote_trunk_opener === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].remote_trunk_opener}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].removable_convertible_top === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Removable Convertible Top</div>
            <div className='col-6 '>{cardetails[0].removable_convertible_top === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].removable_convertible_top}</div>
          </div>

          <div className={`row spec-data ${cardetails[0].roof_carrier === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Roof Carrier</div>
            <div className='col-6 '>{cardetails[0].roof_carrier === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].roof_carrier}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].seat_lumbar_support === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Seat Lumbar Support</div>
            <div className='col-6 '>{cardetails[0].seat_lumbar_support === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].seat_lumbar_support}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].secondary_fuel_type === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Secondary Fuel Type</div>
            <div className='col-6 '>{cardetails[0].secondary_fuel_type === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].secondary_fuel_type}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].shock_absorbers_type === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Shock Absorbers Type</div>
            <div className='col-6 '>{cardetails[0].shock_absorbers_type === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].shock_absorbers_type}</div>
          </div>
          {/* <div className="row spec-data">
                <div className="col-6">Side Airbag-Front</div>
                <div className='col-6 '>{cardetails[0].side_airbag-front==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].side_airbag-front}</div>
            </div> */}
          {/* <div className="row spec-data">
                <div className="col-6">Side Airbag-Rear</div>
                <div className='col-6 '>{cardetails[0].side_airbag-rear==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].side_airbag-rear}</div>
            </div> */}
          <div className={`row spec-data ${cardetails[0].side_impact_beams === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Side Impact Beams</div>
            <div className='col-6 '>{cardetails[0].side_impact_beams === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].side_impact_beams}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].side_stepper === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Side Stepper</div>
            <div className='col-6 '>{cardetails[0].side_stepper === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].side_stepper}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].smart_access_card_entry === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Smart Access Card Entry</div>
            <div className='col-6 '>{cardetails[0].smart_access_card_entry === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].smart_access_card_entry}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].smart_key_band === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Smart Key Band</div>
            <div className='col-6 '>{cardetails[0].smart_key_band === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].smart_key_band}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].smoke_headlamps === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Smoke Headlamps</div>
            <div className='col-6 '>{cardetails[0].smoke_headlamps === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].smoke_headlamps}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].sos_emergency_assistance === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">SOS Emergency Assistance</div>
            <div className='col-6 '>{cardetails[0].sos_emergency_assistance === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].sos_emergency_assistance}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].speakers_front === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Speakers Front</div>
            <div className='col-6 '>{cardetails[0].speakers_front === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].speakers_front}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].speakers_rear === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Speakers Rear</div>
            <div className='col-6 '>{cardetails[0].speakers_rear === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].speakers_rear}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].speed_alert === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Speed Alert</div>
            <div className='col-6 '>{cardetails[0].speed_alert === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].speed_alert}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].steering_column === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Steering Column</div>
            <div className='col-6 '>{cardetails[0].steering_column === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].steering_column}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].steering_gear_type === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Steering Gear Type</div>
            <div className='col-6 '>{cardetails[0].steering_gear_type === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].steering_gear_type}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].steering_wheel_gearshift_paddles === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Steering Wheel Gearshift Paddles</div>
            <div className='col-6 '>{cardetails[0].steering_wheel_gearshift_paddles === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].steering_wheel_gearshift_paddles}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].tailgate_ajar === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Tailgate Ajar</div>
            <div className='col-6 '>{cardetails[0].tailgate_ajar === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].tailgate_ajar}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].tinted_glass === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Tinted Glass</div>
            <div className='col-6 '>{cardetails[0].tinted_glass === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].tinted_glass}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].touch_screen === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Touch Screen</div>
            <div className='col-6 '>{cardetails[0].touch_screen === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].touch_screen}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].trunk_light === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Trunk Light</div>
            <div className='col-6 '>{cardetails[0].trunk_light === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].trunk_light}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].trunk_opener === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Trunk Opener</div>
            <div className='col-6 '>{cardetails[0].trunk_opener === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].trunk_opener}</div>
          </div>
          {/* <div className="row spec-data">
                <div className="col-6">Turning Radius (metres)</div>
                <div className='col-6 '>{cardetails[0].turning_radius_(metres)==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].turning_radius_(metres)}</div>
            </div> */}
          <div className={`row spec-data ${cardetails[0].tyre_size === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Tyre Size</div>
            <div className='col-6 '>{cardetails[0].tyre_size === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].tyre_size}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].tyre_type === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Tyre Type</div>
            <div className='col-6 '>{cardetails[0].tyre_type === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].tyre_type}</div>
          </div>
          {/* <div className="row spec-data">
                <div className="col-6">USB & Auxiliary Input</div>
                <div className='col-6 '>{cardetails[0].usb_&_auxiliary_input==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].usb_&_auxiliary_input}</div>
            </div> */}
          <div className={`row spec-data ${cardetails[0].usb_charger === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">USB Charger</div>
            <div className='col-6 '>{cardetails[0].usb_charger === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].usb_charger}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].vanity_mirror === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Vanity Mirror</div>
            <div className='col-6 '>{cardetails[0].vanity_mirror === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].vanity_mirror}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].vehicle_stability_control_system === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Vehicle Stability Control System</div>
            <div className='col-6 '>{cardetails[0].vehicle_stability_control_system === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].vehicle_stability_control_system}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].wheel_covers === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Wheel Covers</div>
            <div className='col-6 '>{cardetails[0].wheel_covers === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].wheel_covers}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].wheel_size === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className="col-6">Wheel Size</div>
            <div className='col-6 '>{cardetails[0].wheel_size === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].wheel_size}</div>
          </div>
          {/* <div className="row spec-data">
                <div className="col-6">Wi-Fi Connectivity</div>
                <div className='col-6 '>{cardetails[0].wi-fi_connectivity==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].wi-fi_connectivity}</div>
            </div> */}
        </Accordion.Body>
      </Accordion.Item> : null}
      
    </Accordion>
  )
}

export default Others
