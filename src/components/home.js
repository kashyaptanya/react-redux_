import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { setUserData } from "../action/user";

const HOME = () => {
  let { user_data } = useSelector((state) => state.users)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user_data) {
      let active_user = localStorage.getItem("active_user")
      if(!active_user){
        navigate("/login")
      } else {
        let all_users = localStorage.getItem('users_data')
        if(all_users){
          all_users = JSON.parse(all_users)
          let activeUserData = all_users?.filter((au) => au.email == active_user)
          if (activeUserData?.length > 0) {
            dispatch(setUserData(activeUserData[0]))
          }
        } else {
          localStorage.removeItem("active_user")
          navigate("/login")
        }
      }
    }
  },[user_data])

  return (
    <>
      <h1 className="text-center p-3">DASHBOARD</h1>
      <form className="style">
        <div className="form-group m-3">
          <label>Name</label>
          <input className="form-control text-primary" value={user_data?.name} />
        </div>
        <div className="form-group m-3">
          <label>Email address</label>
          <input className="form-control text-primary" value={user_data?.email} />
        </div>
        <div className="form-group m-3">
          <label>Contact</label>
          <input className="form-control text-primary" value={user_data?.phone} />
        </div>
      </form>
    </>
  )
}
export default HOME




