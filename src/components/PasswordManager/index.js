import {Component} from 'react'
import AddPassword from '../AddPassword'

import './index.css'

class PasswordManager extends Component {
  render() {
    return (
      <div className="bgContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <AddPassword />
      </div>
    )
  }
}
export default PasswordManager
