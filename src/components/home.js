import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

const HOME = () => {
  let { user_data } = useSelector((state) => state.users)

  const navigate = useNavigate();

  useEffect(() => {
    console.log("sssssss",user_data)
    if(!user_data){
      navigate("/")
    }
  },[user_data])

  return (
    <>
      <h1 className="text-center p-3">DASHBOARD</h1>
      <form className="style">
        <div className="form-group m-3">
          <label>Name</label>
          <input className="form-control text-primary"  value={user_data?.name}/>
        </div>
        <div className="form-group m-3">
          <label>Email address</label>
          <input className="form-control text-primary"value={user_data?.email} />
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




