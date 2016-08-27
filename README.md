# React Dumb Modal
A simpler modal. A modal that is not self-aware.
```js
var Modal = require('react-dumb-modal')
<Modal dismiss={function(){/* handle the dismiss here */}} />
```
Dumb Modals are always visible, hence being "dumb". Consequently you will need to control the visibility of the modal from the parent component. By moving all of the state out of the child component, it becomes easier to reason with. The same goes for any modal animations.

**note:** the dismiss prop is a function that will be called when a user presses escape or clicks off of the modal. Assuming you want to allow the user to dismiss the modal, you should implement some logic here that toggle off the modal (either by removing it altogether or changing the style).

## Usage
See props in the usage example below:
```js
<Modal
  dismiss={function(){}}
  overlayStyle={{background: 'rgba(0,0,0,.5)'}}
  overlayClassName='overlay' //if you prefer to use css styling set a className here
  modalStyle={{background: 'white'}}
  modalClassName='modal' //className for the actual modal box
  unstyled={true} //if true no default styles will be included
  />
```

## Practical Example
```js
import React, { Component } from 'react'
import Modal from 'react-dumb-modal'

class Page extends Component {
  toggleModal = () => {
    this.setState({showModal: !this.state.showModal})
  }

  render() {
    return(
      <div>
        {this.state.showModal ? <Modal dismiss={this.toggleModal} /> : null}
      </div>
    )
})
```
