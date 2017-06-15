/**
 * Created by Edge on 5/30/2017.
 */


import React from 'react';
import { connect } from 'react-redux';
import Reviews from '../../components/Reviews';
import {  } from './actions';
// import PropTypes from 'prop-types';

export class ReviewsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
  };

  componentWillMount() {

  }

  render() {
    return (
      <Reviews {...this.props}/>
    );
  }
}

export default connect(null)(ReviewsContainer);
