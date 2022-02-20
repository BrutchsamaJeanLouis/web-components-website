import React from 'react'
// import 'jquery/src/jquery'
// import '@popperjs/core'
// import 'popper.js'
import './App.css'
import { Button, Modal } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setSideMenuOpened } from './app/sessionSlice'

function App () {
  const dispatch = useDispatch()
  const showModal = useSelector((root) => root.session.sideMenuOpened)
  return (
    <div className='App'>
      <button onClick={() => dispatch(setSideMenuOpened(true))}> modal </button>
      <Modal show={showModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(setSideMenuOpened(false))}>
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      Hello
    </div>
  )
}

export default App
