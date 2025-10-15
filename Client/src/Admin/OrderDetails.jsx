import { useEffect, useState } from "react";
import BASE_URL from "../Config/Config";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Order = ()=>{

    const [mydata, setMydata]  =useState([]);

    const LoadData =async ()=>{
        const api = `${BASE_URL}/product/Order`;
         try {

            const response  =await axios.get(api);
            console.log(response.data);
            setMydata(response.data);
            
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        LoadData();
    },[])


      const ans = mydata.map(key=>{
        return(
            <>
            <tr>
                <td>{key.cartItems.map(key1=>{
                  return(
                    <>
                    <tr>
                     name:<td>{key1.name}</td>
                     price:<td>{key1.price}</td>
                     Quantity:<td>{key1.qty}</td>
                     ProId:<td>{key1.productId}</td>
                    </tr>
                    </>
                  )
                })}
                </td>
                <td>{key.paidAt}</td>
                <td>{key.payerId}</td>
                <td>{key.paymentId}</td>
                <td>{key.status}</td>
                <td>{key.totalAmount}</td>
            </tr>
            </>
        )
      })

    return(
        <>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>cartItems</th>
          <th>paidAt</th>
          <th>payerId</th>
          <th>paymentId</th>
          <th>status</th>
          <th>totalAmount</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>


        </>
    )
}

export default Order;