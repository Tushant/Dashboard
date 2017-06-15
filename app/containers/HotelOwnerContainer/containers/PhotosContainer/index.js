/**
 * Created by Edge on 5/30/2017.
 */


import React from 'react';
import { connect } from 'react-redux';
import Photos from '../../components/Photos';
import {  } from './actions';
// import PropTypes from 'prop-types';

export class PhotosContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
  };

  componentWillMount() {

  }

  render() {
    return (
      <Photos {...this.props}/>
    );
  }
}

export default connect(null)(PhotosContainer);
