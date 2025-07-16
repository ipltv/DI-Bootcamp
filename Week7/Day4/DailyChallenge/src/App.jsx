import './App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function App() {

  return (
      <div style={{width: '500px'}}>
        <Carousel >
          <div>
            <img src="/HongKong.jpg" />
            <p className="legend">Hong Kong"</p>
          </div>
          <div>
            <img src="/Macao.webp" />
            <p className="legend">Macao</p>
          </div>
          <div>
            <img src="/Japan.webp" />
            <p className="legend">Japan</p>
          </div>
          <div>
            <img src="/LasVegas.webp" />
            <p className="legend">Las Vegas</p>
          </div>
        </Carousel>
      </div>
  )
}

export default App
