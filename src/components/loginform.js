
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { setUserData } from "../action/user";
import { useDispatch, useSelector } from 'react-redux'

function Loginform() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const user_data = useSelector((state) => state.users.user_data)
  const [val, setValue] = useState({
  })

  const handlevalue = (e, key) => {
    setValue({ ...val, [key]: e.target.value })
  }

  useEffect(() => {
    if(user_data){
      navigate("/home")
    }
  }, [user_data])
  

  return (
    <>
      <h1 className="text-center p-3">LOGIN</h1>
      <form className="style"
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(setUserData(val))
        }}>
        <div className="form-group m-3">
          <label>Name</label>
          <input type="text" required value={val?.name} onChange={(e) => handlevalue(e, 'name')} className="form-control" placeholder="Enter name" />
        </div>
        <div className="form-group m-3">
          <label>Email address</label>
          <input type="email" required value={val?.email} onChange={(e) => handlevalue(e, 'email')} className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group m-3">
          <label>Contact</label>
          <input type="tel" required pattern="[0-9]{10}" value={val?.phone} onChange={(e) => handlevalue(e, 'phone')} className="form-control" placeholder="Enter phone no." />
        </div>
        <button type="submit" className="btn btn-primary m-3">Submit</button>
      </form>
    </>
  )
}
export default Loginform



