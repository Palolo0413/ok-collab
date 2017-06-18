import React from 'react'

import { logout } from 'APP/app/redux/auth'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Modal, { closeStyle } from 'simple-react-modal'

import Sidebar from './Sidebar'
import Recommendations from './Recommendations'


// <h3>Username: {user && user.name}</h3>
//if (auth.id === user.id) {console.log("this person is the user in question!")}


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

/* -----------------    COMPONENT     ------------------ */

class UserProfile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  show() {
    this.setState({ show: true })
  }

  close() {
    this.setState({ show: false })
  }

  // componentWillReceiveProps(newProps, oldProps) {
  //   let isUser = false;
  //   this.setState({
  //     story: newProps.story
  //   });
  // }

  // if (true) {
  //     isUser = true;
  //     console.log("IS USER IS TRUE")
  // }

  render() {
    console.log("what is props on userprofile???", this.props)
    let user = this.props.user;
    return (
      <div>
        <div id="main" className="container">
          {console.log("what is on user????", user)}
          {user ?
            <div className="row">
              <div className="user-info col-md-10">
                <div className="col-md-4 col-sm-6">
                  <img className="circle-img" src={user.photoUrl} />
                </div>
                <div className="col-md-8 col-sm-6">
                  <div>
                    <span className="inlinespan"><h1>{user.name}</h1><button onClick={this.show.bind(this)} className="btn btn-primary btn-sm btn-dark">Message</button></span>
                    <h5>{user.city}</h5>
                  </div>
                  <div>
                    <h4>About Me:</h4>
                    <p>{user.blurb}</p>
                  </div>
                  <div>
                    <h4>Looking For:</h4>
                    <p>{user.lookingFor}</p>
                  </div>
                  <div>
                    <h4>Genres I Like:</h4>
                    <p>{user.style}</p>
                  </div>
                  <div>
                    <h4>Skills:</h4>
                    <h5><span>{user.skills && user.skills.map((skill, id) => <span key={id}><Link to="#">{skill}</Link><span>, </span></span>)}</span></h5>
                  </div>
                </div>
                <div>
                  <h4>Uploads:</h4>
                  {user.uploads ? (user.uploads.map((upload, id) => {
                    return <iframe key={id} width="300" height="175" src={`${upload}`} frameBorder="0" allowFullScreen></iframe>
                  })) : <h5>This user doesnt have any uploads.</h5>}
                </div>
              </div>
              <div className="col-md-2">
                <Modal
                  className="modal-style" //this will completely overwrite the default css completely
                  style={{ background: 'red' }} //overwrites the default background
                  containerStyle={{ background: 'grey' }} //changes styling on the inner content area
                  containerClassName="test"
                  closeOnOuterClick={true}
                  show={this.state.show}
                  onClose={this.close}
                  transitionSpeed={1000}>
                  {console.log("this.state.show?", this.state.show)}

                  <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
                  <div>hey</div>
                  <form>
                    <textarea />
                    <button>Send</button>
                  </form>
                </Modal>
              </div>


            </div>
            : null}
          {/*  <div className="col-md-2">
          <Recommendations />
        </div> */}

        </div>
      </div>
    )
  }
}


/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ users, auth }) => ({
  user: users.selectedUser,
  auth: auth
})

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleAddToCart: (cartItem) => {
//       dispatch(addCartItem(cartItem))
//     }
//   }
// }

export default connect(mapStateToProps, null)(UserProfile)

