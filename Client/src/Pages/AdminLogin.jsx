import { useNavigate } from "react-router-dom";


const AdminLogin = ()=>{
    const navigate = useNavigate();
    return(
        <>
        <h1>Login</h1>
        <button style={{padding:"50px"}} onClick={()=>{navigate("/admin")}}>Admin</button>
        </>
    )
}

export default AdminLogin;