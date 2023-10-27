import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", password: "", role: ""
  });



  let name, value;
  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }
  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, password, role } = user;

    const res = await fetch('/adduser', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password, role
      })
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("!Fill Data Properly/ User exist in Database");
      console.log("!Fill Data Properly/ User exist in Database");
    } else {
      window.alert("New User Added");
      console.log("Input Sucessful");

      navigate("/pages/user/manage");
    }

  }



  return (
    <>
      <div className=' m-20 '>
        <h2 className='my-10 font-700'>Add user</h2>
        <form method="Post" className="form-box-user">
          <div className="inner-form-box m-10">
            <div className="userform bg-white p-20">
              <div className="inneruserform grid gap-7 pb-20">
                <div className="inner-title">
                  <h3 className='font-700'>Add user</h3>
                </div>
                <div className="user-form-title">
                  <h4 className='font-700'>Name</h4>
                </div>
                <div className="userform-input">
                  <input className='border rounded w-1/2 p-5' type="text" name="name" id="name" value={user.name} onChange={handleInputs} />
                </div>
                <div className="user-form-email">
                  <h4 className='font-700'>Email</h4>
                </div>
                <div className="userform-input">
                  <input className='border rounded w-1/2 p-5' type="text" name="email" id="email" value={user.email} onChange={handleInputs} />
                </div>
                <div className="user-form-password">
                  <h4 className='font-700'>Password</h4>
                </div>
                <div className="userform-input">
                  <input className='border rounded w-1/2 p-5' type="password" name="password" id="password" value={user.password} onChange={handleInputs} />
                </div>
                <div className="user-form-password">
                  <h4 className='font-700'>Role</h4>
                </div>
                <div className="userform-input">
                  <select required name="role" id="role" className='border rounded w-1/2 p-5' value={user.role} onChange={handleInputs}>
                    <option value="manager">Manager</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="submitbutton-user m-20">
              <div className="submitbutton">
                <button className='rounded border border-black p-5 mx-10' onClick={PostData}>Save Details</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddUser