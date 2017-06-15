/**
 * Created by Edge on 5/28/2017.
 */

import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/Navigation';
import {  } from './actions';
import { logout } from '../../../../../actions/authActions';
import PropTypes from 'prop-types';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  componentWillMount() {

  }

  render() {
    return (
      <Navigation {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => Object.assign({}, {
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(NavigationContainer);
