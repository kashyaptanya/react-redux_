
import React, { useState } from "react"

function Sign() {

  const [val, setValue] = useState({})

  let users_data = []

  const handlevalue = (e, key) => {
    setValue({ ...val, [key]: e.target.value })
  }
  const handleform = (e) => {
    e.preventDefault()
    if (localStorage.getItem('users_data')) {
      // data exists
      users_data = JSON.parse(localStorage.getItem('users_data'))
    }
    let exist = users_data?.filter((ud) => ud.email === val.email || ud.phone === val.phone )
    if (exist.length > 0) {
      alert("OOPS!! email or phone is already exist")
      return false
    }
    var user_data = {
      name: val.name,
      email: val.email,
      phone: val.phone,
      password: val.password
    }
    users_data.push(user_data)
    localStorage.setItem("users_data", JSON.stringify(users_data))
    alert("Users registered succesfully")
  }
  return (
    <>
      <h1 className="text-center p-3">SIGN UP</h1>
      <form className="style" onSubmit={handleform}>
        <div className="form-group m-3">
          <label>Name</label>
          <input type="text" required value={val?.name ?? ""} onChange={(e) => handlevalue(e, 'name')} className="form-control" placeholder="Enter name" />
        </div>
        <div className="form-group m-3">
          <label>Email address</label>
          <input type="email" required value={val?.email ?? ""} onChange={(e) => handlevalue(e, 'email')} className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group m-3">
          <label>Contact</label>
          <input type="tel" required pattern="[0-9]{10}" value={val?.phone ?? ""} onChange={(e) => handlevalue(e, 'phone')} className="form-control" placeholder="Enter phone no." />
        </div>
        <div className="form-group m-3">
          <label>password</label>
          <input type="password" required value={val?.password ?? ""} onChange={(e) => handlevalue(e, 'password')} className="form-control" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary m-3">Submit</button>
        <br></br>
        <a href="http://localhost:3000/login">already have an account ?</a>
      </form>
    </>
  )
}
export default Sign



