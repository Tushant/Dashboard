/**
 * Created by Edge on 5/30/2017.
 */


import React from 'react';
import { connect } from 'react-redux';
import Map from '../../components/Map';
import {  } from './actions';
// import PropTypes from 'prop-types';

export class MapContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
  };

  componentWillMount() {

  }

  render() {
    return (
      <Map {...this.props}/>
    );
  }
}

export default connect(null)(MapContainer);
