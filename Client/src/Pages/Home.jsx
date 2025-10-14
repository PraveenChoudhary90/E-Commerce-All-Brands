import Carousel from 'react-bootstrap/Carousel';
const Home = ()=>{
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
        </>
    )
}

export default Home;