import { useNavigate } from "react-router-dom";

const Cancel = () => {
   const navigate = useNavigate();
    return(
        <>
          <h1>Payment Canceled. Please try again.</h1>
   <button style={{textAlign:"center", marginLeft:"200px"}} onClick={()=>{navigate("/")}} >back to home</button>
        </>
    )
  

};

export default Cancel;