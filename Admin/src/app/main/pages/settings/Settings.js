import React from 'react'

function Settings() {
  return (
    <>
    <div className=' m-20 '>
    <h2 className='my-10 font-700'>Settings</h2>
    <form action="" className="form-box-settings">
      <div className="inner-form-box m-10">
      <div className="settingsform bg-white p-20 w-1/2">
        <div className="innersettingsform grid gap-7 pb-20">
          <div className="inner-title">
            <h3 className='font-700'>Site Settings</h3>
          </div>
        <div className="settings-form-title">
          <h4 className='font-700'>Site Name</h4>
        </div>
        <div className="settingsform-input">
          <input className='border rounded w-full p-5' type="text" name="sitename" id="sitename" />
        </div>
        <div className="image-form my-10">
            <h4 className='font-700 my-5' >Logo</h4>
            <div className='' action="">
              <input type="file" id="myFile" name="filename"></input>
            </div>
        </div>
        <div className="favicon-form my-10">
            <h4 className='font-700 my-5' >Favicon</h4>
            <div className='' action="">
              <input type="file" id="favicon" name="favicon"></input>
            </div>
        </div>
        <div className="gacode-form my-10">
            <h4 className='font-700 my-5' >Google Analytics Code [ Must include "&lt;script&gt;"  tag if not. ]</h4>
            <div className='gacode' action="">
              <textarea className='border rounded' name="" id="gac" cols="70" rows="5"></textarea>
            </div>
        </div>
        <div className="fpcode-form my-10">
            <h4 className='font-700 my-5' >Facebook Pixel Code [ Must include "&lt;script&gt;" tag if not. ]</h4>
            <div className='gacode' action="">
              <textarea className='border rounded' name="" id="fpc" cols="70" rows="5"></textarea>
            </div>
        </div>
        <div className="gads-form my-10">
            <h4 className='font-700 my-5' >Google AdSense [ Must include "&lt;script&gt;"  tag if not. ]</h4>
            <div className='gads' action="">
              <textarea className='border rounded' name="" id="gads" cols="70" rows="5"></textarea>
            </div>
        </div>
        <div className="gcode-form my-10">
            <h4 className='font-700 my-5' >General Code [ Must include "&lt;script&gt;"  tag if not. ]</h4>
            <div className='gcode' action="">
              <textarea className='border rounded' name="" id="gc" cols="70" rows="5"></textarea>
            </div>
        </div>
        <div className="addtags-form my-10">
            <h4 className='font-700 my-5' >Select Cars for Menu on Frontend</h4>
            <div className='' action="">
              <input className='border rounded w-full' type="text" id="addtags" name="addtags" ></input>
            </div>
        </div>
        </div>
      </div>
      <div className="submitbutton-settings m-20">
          <div className="submitbutton">
            <button className='rounded border border-black p-5 mx-10'>Save Details</button>
          </div>
        </div>
      </div>
    </form>
    </div>
    </>
  )
}

export default Settings