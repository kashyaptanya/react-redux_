import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { setUserData } from "../action/user";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user_data = useSelector((state) => state.users.user_data)
    const [val, setValue] = useState({})

    const handlevalue = (e, key) => {
        setValue({ ...val, [key]: e.target.value })
    }

    const handleform = (e) => {
        e.preventDefault()
        let userData = localStorage.getItem("users_data")
        // console.log("miuh",userData)
        if (userData) {
            userData = JSON.parse(userData)
            if (val.name === userData?.name && val.email === userData?.email) {
                alert("login successfully")
                dispatch(setUserData(val))
            }
        } else {
            alert("invalid login")
        }
    }

    useEffect(() => {
        if(user_data){
            navigate("/home")
        }
    }, [user_data])

    return (
        <>
            <h1 className="text-center p-3">login </h1>
            <form className="style" onSubmit={handleform}>
                <div className="form-group m-3">
                    <label>Name</label>
                    <input type="text" required value={val.name} onChange={(e) => handlevalue(e, 'name')} className="form-control" placeholder="Enter name" />
                </div>
                <div className="form-group m-3">
                    <label>Email address</label>
                    <input type="email" required value={val.email} onChange={(e) => handlevalue(e, 'email')} className="form-control" placeholder="Enter email" />
                </div>
                <button type="submit" className="btn btn-primary m-3">Submit</button>
                <br></br>
        <a href="http://localhost:3000/login">Don't have an account ?</a>
            </form>
        </>
    )
}

export default Login