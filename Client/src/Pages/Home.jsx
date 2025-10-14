import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BASE_URL from '../Config/Config';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = ()=>{
     
    const [mydata, setMydata] = useState([]);

    const LoadData = async()=>{
        const api = `${BASE_URL}/product/ProductDisplay`;
        try {
            const response = await axios.get(api);
            console.log(response.data);
            setMydata(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        LoadData();
    },[])



    const ans = mydata.map(key=>{
        return(
            <>
                <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={`${BASE_URL}/${key.defaultImage}`}  />
      <Card.Body>
        <Card.Title>Brands Product</Card.Title>
        <Card.Text>
          <p>{key.description}</p>
         <h6>Name:<strong>{key.name}</strong></h6>
         <h6>Brand:<strong>{key.brand}</strong></h6>
         <h6>Color:<strong>{key.color}</strong></h6>
         <h6>Price:<strong>{key.price}</strong></h6>
        </Card.Text>
        <Button variant="warning">Add to Cart</Button>
      </Card.Body>
    </Card>

            </>
        )
    })


    return(
        <>
          


         <Carousel>
      <Carousel.Item>
      <img src="v4.jpg" alt="first view" id='pic'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="v2.jpg" alt="Second view" id='pic' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src="v3.jpg" alt="Third view" id='pic' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

             <div id="cart">
            {ans}
          </div>

        </>
    )
}

export default Home;