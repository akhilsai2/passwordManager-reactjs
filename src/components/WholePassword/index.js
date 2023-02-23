import {Component} from 'react'
import ListPassword from '../ListPassword'
import './index.css'

class WholePassword extends Component {
  state = {search: '', check: false}

  searchList = event => {
    this.setState({search: event.target.value})
  }

  checked = () => {
    this.setState(prevState => ({
      check: !prevState.check,
    }))
  }

  render() {
    const {search, check} = this.state
    const {list, detailUser} = this.props
    let searchResult = list

    if (search !== '') {
      searchResult = list.filter(each => {
        const searchOf = each.website.toLowerCase()
        return searchOf.includes(search.toLowerCase())
      })
    }
    // console.log(users)
    const removeUserId = id => {
      detailUser(id)
    }
    return (
      <div className="container">
        <div className="showContainer">
          <div className="show-head-cont">
            <h1 className="show-head">Your Passwords</h1>
            <div className="num">
              <p className="Number">{list.length}</p>
            </div>
          </div>
          <div className="search-cont">
            <div className="search-logo">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
            </div>
            <input
              className="searchInput"
              type="search"
              placeholder="Search"
              onChange={this.searchList}
            />
          </div>
        </div>
        <hr />
        <div className="check-cont">
          <input
            className="check-input"
            type="checkbox"
            value="password"
            id="checkInput"
            onChange={this.checked}
          />
          <label className="label" htmlFor="checkInput">
            Show Passwords
          </label>
        </div>
        {searchResult.length === 0 ? (
          <div className="img-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
              className="noPassImg"
            />
            <p className="para-pass">No Passwords</p>
          </div>
        ) : (
          <ul className="list-cont">
            {searchResult.map(each => (
              <ListPassword
                item={each}
                key={each.id}
                deleteUser={removeUserId}
                isShow={check}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default WholePassword
