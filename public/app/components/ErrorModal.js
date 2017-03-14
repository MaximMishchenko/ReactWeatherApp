import React, { PropTypes } from 'react'

class ErrorModal extends React.Component {
  static defaultProps = {
    title: 'Title'
  }

  static propTypes = {
    title: PropTypes.string,
    message: PropTypes.string.isRequired
  }
  constructor(props){
    super(props)
  }

  componentDidMount(){
    let modal = new Foundation.Reveal($('#error-modal'))
    modal.open()
  }

  render(){
    let {title, message} = this.props
    console.log(this.props);
    return(
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    )
  }
}

export default ErrorModal
