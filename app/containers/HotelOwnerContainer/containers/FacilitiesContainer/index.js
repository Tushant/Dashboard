/**
 * Created by Edge on 5/30/2017.
 */


import React from 'react';
import { connect } from 'react-redux';
import Facilities from '../../components/Facilities';
import {  } from './actions';
// import PropTypes from 'prop-types';

export class FacilitiesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
  };

  componentWillMount() {

  }

  render() {
    return (
      <Facilities {...this.props}/>
    );
  }
}

export default connect(null)(FacilitiesContainer);
