import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Modal } from 'react-bootstrap'
// import { Button } from 'semantic-ui-css';
import { Button, Icon } from 'semantic-ui-react'

const useStyles = makeStyles((theme) => ({
  cartButton: {
    margin: 'auto',
    marginTop: '1em',
    display: 'inline-block',
  },
}))

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Your Cart</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button color="red" onClick={props.onHide}>
          Cancel
        </Button>
        <Button onClick={null}>Go to Cart</Button>
      </Modal.Footer>
    </Modal>
  )
}

function CartAccess() {
  const classes = useStyles()
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <div className={classes.cartButton}>
        <Button animated="vertical" onClick={() => setModalShow(true)}>
          <Button.Content hidden>Cart</Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
      </div>

      <div className={classes.cartButton}>
        <Button animated="vertical" onClick={() => setModalShow(true)}>
          <Button.Content hidden>Wishlist</Button.Content>
          <Button.Content visible>
            <Icon name="heart" />
          </Button.Content>
        </Button>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}
