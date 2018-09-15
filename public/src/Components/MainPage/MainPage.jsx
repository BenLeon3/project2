import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Gig_Finder_Logo from '../Navbar/images/Gig_Finder_Logo.jpg';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';

const styles = {
    appBar: {
      position: 'relative',
    },
    flex: {
      flex: 1,
    },
};

class MainPage extends React.Component {

    render() {
        return (
        <div>
            <img src={Gig_Finder_Logo} alt='Gig_Finder_Logo' height="100" />
            <Login />
            <SignUp />
        </div>
        )
    }

}

MainPage.PropTypes = {
    classes: PropTypes.ob
}

export default withStyles(styles)(MainPage)