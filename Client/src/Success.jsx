import { useNavigate } from "react-router-dom";





const Success = () => {

    const navigate = useNavigate();

  return (<>
  
   <h1>Payment Successful! Thank you!</h1>
   <button style={{textAlign:"center", marginLeft:"200px"}} onClick={()=>{navigate("/")}} >back to home</button>

  
  
  </>)
};

export default Success;