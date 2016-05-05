var React = require('react')

var styles = {
  modal: {
    position: 'absolute',
    top: '25%',
    left: '50%',
    width: 300,
    background: 'white',
    padding: 50,
    marginLeft: -200
  },
  overlay: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'rgba(0,0,0,.5)'
  }
}

module.exports = React.createClass({
  propTypes: {
    dismiss: React.PropTypes.func,
    unstyled: React.PropTypes.bool
  },

  getDefaultProps: function () {
    return {
      overlayStyle: styles.overlay,
      overlayClassName: null,
      modalStyle: styles.modal,
      modalClassName: null,
      unstyled: false,
    }
  },

  componentWillMount: function () {
    document.addEventListener('keydown', this.keyPress)
  },

  componentWillUnmount: function (){
    document.removeEventListener('keydown', this.keyPress)
  },

  keyPress: function (e){
    if(e.keyCode === 27){
      this.props.dismiss()
    }
  },

  doNotPropogate: function (e){
    e.stopPropagation()
  },

  render: function () {
    return (
      React.DOM.div({ className: this.props.overlayClassName, style: this.unstyled ? null : this.props.overlayStyle, onClick: this.props.dismiss},
        React.DOM.div({ className: this.props.modalClassName, style: this.unstyled ? null : this.props.modalStyle, onClick: this.doNotPropogate},
          this.props.children
        )
      )
    )
  }
})
