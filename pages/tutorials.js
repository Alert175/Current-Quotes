import {Carousel} from 'react-bootstrap'
import Link from 'next/link'

const Tutorials = () => {

  return(
    <Carousel>
      <Carousel.Item>
        <img
          src="/Images/holder.jpg"
          alt="Picture of the author"
          style={{
            height: `100vh`,
            width: `100vw`
          }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/Images/holder.jpg"
          alt="Picture of the author"
          style={{
            height: `100vh`,
            width: `100vw`
          }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/Images/holder.jpg"
          alt="Picture of the author"
          style={{
            height: `100vh`,
            width: `100vw`
          }}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <Link href="/">
            <a>Начать</a>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Tutorials;