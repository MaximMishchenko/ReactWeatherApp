import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

class ErrorModal extends React.Component {
  static defaultProps = {
    title: 'City not found'
  }

  static propTypes = {
    title: PropTypes.string,
    message: PropTypes.string.isRequired
  }

  constructor(props){
    super(props)
  }

  componentDidMount(){
    let {title, message} = this.props
    let modalContent = (
      <div id="error-modal" className="reveal tiny text-center custom-modal" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    )

    let modalElement = $(ReactDOMServer.renderToString(modalContent))
    $(ReactDOM.findDOMNode(this)).html(modalElement)

    let modal = new Foundation.Reveal($('#error-modal'))
    modal.open()
  }

  render(){
    return(
      <div></div>
    )
  }
}

export default ErrorModal
