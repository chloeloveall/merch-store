import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from '../../img/carousel1.jpg';
import Carousel2 from '../../img/carousel2.jpg';
import Carousel3 from '../../img/carousel3.jpg';

const useStyles = makeStyles(() => ({
  carouselStyle: {
    width: '98%',
    height: 'auto',
    margin: 'auto',
    padding: '5em'
  },
  carouselCaptions: {
    backgroundColor: '#000000',
    opacity: 0.6,
  },
  carouselStyle2: {
    backgroundColor: '#000000'
  }
}));

export default function ImageCarousel() {
  const classes = useStyles()

  return (
    <>
      <Carousel className={classes.carouselStyle}>
        <Carousel.Item className={classes.carouselStyle2}>
          <img className="d-block w-100" src={Carousel1} alt="First slide" />
          <Carousel.Caption className={classes.carouselCaptions}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel2} alt="Second slide" />

          <Carousel.Caption className={classes.carouselCaptions}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel3} alt="Third slide" />

          <Carousel.Caption className={classes.carouselCaptions}>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}