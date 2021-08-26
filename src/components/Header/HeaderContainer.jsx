import React from 'react'
import Header from './Header';
import { setAuthUserData, toggleIsFetching } from '../../redux/auth-reducer';

import * as axios from 'axios';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
   componentDidMount() {
      // this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
         withCredentials: true
      })
         .then(response => {
            if(response.data.resultCode === 0) {
               // this.props.toggleIsFetching(false);
               let { id, login, email } = response.data.data;
               this.props.setAuthUserData(id, email, login);
            }
         });

   }
   render(){
      return (
         <Header {...this.props} />
      )
   }
}

const mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
   }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);