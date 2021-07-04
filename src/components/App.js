import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import { Container, Row, Col } from 'react-bootstrap';
// import footerX from '../img/footerX.png';
// import { makeStyles } from '@material-ui/core/styles';
import './App.css';

// const useStyles = makeStyles((theme) => ({
  // footerImg: {
  //   marginBottom: -100,
  //   position: 'relative',
  //   overflow: 'hidden',
  //   display: 'block'
  // },
  // footerImg: {
  //   backgroundImage: `url(${footerX})`,
  //   backgroundPosition: 'left bottom',
  //   // backgroundAttachment: 'fixed',
  //   // backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   minHeight: '100vh',
  // }
  // makeTall: {
  //   minHeight: '100vh'
  // }
// }));

function App() {
  
  // const classes = useStyles();

  return (
    <>
    <div className='yellowX'>
      <Header />
    <Container fluid>
    {/* <div className={classes.makeTall}> */}
      <Main />
      {/* </div> */}
    </Container>
      <Footer />
      </div>
    </>
  );
}

export default App;


