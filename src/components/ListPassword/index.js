import './index.css'

const ListPassword = props => {
  const {item, deleteUser, isShow} = props
  const {id, website, name, password} = item

  const remove = () => {
    deleteUser(id)
  }

  return (
    <li className="item-cont">
      <div className="cont">
        <div className="profile-cont">
          <p className="profile-letter">{website[0]}</p>
        </div>
        <div className="user-cont">
          <p className="name">
            {website}
            <br />
            {name}
            <br />
            {isShow ? (
              `${password}`
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
                alt="stars"
                className="star"
              />
            )}
          </p>
        </div>
      </div>
      <button
        data-testid="delete"
        className="btn-delete"
        type="button"
        onClick={remove}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}
export default ListPassword
