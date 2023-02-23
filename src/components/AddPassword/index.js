import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import WholePassword from '../WholePassword'
import './index.css'

class AddPassword extends Component {
  state = {userList: [], website: '', name: '', password: ''}

  fileSubmit = event => {
    event.preventDefault()
    const {website, name, password} = this.state
    const newList = {id: uuidV4(), website, name, password}
    this.setState(prevState => ({
      userList: [...prevState.userList, newList],
      name: '',
      website: '',
      password: '',
    }))
  }

  websiteName = event => {
    this.setState({website: event.target.value})
  }

  userName = event => {
    this.setState({name: event.target.value})
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  removeUser = id => {
    console.log(id)
    this.setState(prevState => ({
      userList: prevState.userList.filter(each => each.id !== id),
    }))
  }

  render() {
    const {userList, website, name, password} = this.state
    // console.log(userList)
    const searchList = userList
    return (
      <>
        <div className="addPassword-cont">
          <div className="add-cont">
            <h1 className="add-para">Add New Password</h1>
            <form className="form" onSubmit={this.fileSubmit}>
              <div className="web">
                <div className="icon-cont">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                    alt="website"
                    className="icon"
                  />
                </div>
                <input
                  className="input"
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.websiteName}
                  value={website}
                />
              </div>
              <div className="web">
                <div className="icon-cont">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                    alt="username"
                    className="icon"
                  />
                </div>
                <input
                  className="input"
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.userName}
                  value={name}
                />
              </div>
              <div className="web">
                <div className="icon-cont">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                    alt="password"
                    className="icon"
                  />
                </div>
                <input
                  className="input"
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.password}
                  value={password}
                />
              </div>
              <button className="btn" type="submit">
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="image"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="image2"
          />
        </div>
        <WholePassword list={searchList} detailUser={this.removeUser} />
      </>
    )
  }
}
export default AddPassword
