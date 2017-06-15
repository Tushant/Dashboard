/**
 * Created by Edge on 5/31/2017.
 */


import React from 'react';
import { connect } from 'react-redux';
import Bookings from '../../components/Bookings';
import {  } from './actions';
// import PropTypes from 'prop-types';

export class BookingsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
  };

  componentWillMount() {

  }

  render() {
    return (
      <Bookings {...this.props}/>
    );
  }
}

export default connect(null)(BookingsContainer);
