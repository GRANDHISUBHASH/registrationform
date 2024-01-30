import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userFirstNameValue: '',
      userLastNameValue: '',
      userNameError: false,
      userErrorLast: false,
      onsubmitSuccess: false,
    }
  }

  onSubmitButtonClicked = event => {
    event.preventDefault()
    const {userFirstNameValue, userLastNameValue} = this.state
    if (userFirstNameValue === '') {
      this.setState({userNameError: true})
    }
    if (userLastNameValue === '') {
      this.setState({userErrorLast: true})
    }
    if (userLastNameValue !== '' && userFirstNameValue !== '') {
      this.setState({onsubmitSuccess: true})
    }
  }

  eventHandlerLast = () => {
    const {userLastNameValue} = this.state
    if (userLastNameValue === '') {
      this.setState({userErrorLast: true})
    } else {
      this.setState({userErrorLast: false}) // Clear error message if last name is provided
    }
  }

  eventHandlerFirst = () => {
    const {userFirstNameValue} = this.state
    if (userFirstNameValue === '') {
      this.setState({userNameError: true})
    } else {
      this.setState({userNameError: false}) // Clear error message if first name is provided
    }
  }

  lastName = event => {
    this.setState({userLastNameValue: event.target.value})
  }

  firstName = event => {
    this.setState({userFirstNameValue: event.target.value})
  }

  onChangeRegistrationPage = () => {
    this.setState({
      userFirstNameValue: '',
      userLastNameValue: '',
      userNameError: false,
      userErrorLast: false,
      onsubmitSuccess: false,
    })
  }

  getFormCard = () => {
    const {userErrorLast, userNameError, onsubmitSuccess} = this.state
    return (
      <form onSubmit={this.onSubmitButtonClicked}>
        {onsubmitSuccess ? (
          <div className="success-Card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button type="button" onClick={this.onChangeRegistrationPage}>
              Submit Another Response
            </button>
          </div>
        ) : (
          <div>
            <div className="firstName-input-box">
              <label htmlFor="1">FIRST NAME</label>
              <input
                onChange={this.firstName}
                id="1"
                type="text"
                placeholder="First Name"
                onBlur={this.eventHandlerFirst}
              />
              {userNameError && <p>Required</p>}
            </div>
            <div className="secondName-input-box">
              <label htmlFor="2">LAST NAME</label>
              <input
                onChange={this.lastName}
                onBlur={this.eventHandlerLast}
                id="2"
                placeholder="Last Name"
                type="text"
              />
              {userErrorLast && <p>Required</p>}
            </div>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    )
  }

  render() {
    return (
      <div className="Registration-form">
        <h1>Registration</h1>
        {this.getFormCard()}
      </div>
    )
  }
}

export default RegistrationForm
