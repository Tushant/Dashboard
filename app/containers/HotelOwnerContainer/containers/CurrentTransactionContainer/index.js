/**
 * Created by Edge on 5/30/2017.
 */


import React from 'react';
import { connect } from 'react-redux';
import CurrentTransaction from '../../components/CurrentTransaction';
import {  } from './actions';
// import PropTypes from 'prop-types';

export class CurrentTransactionContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
  };

  componentWillMount() {

  }

  render() {
    return (
      <CurrentTransaction {...this.props}/>
    );
  }
}

export default connect(null)(CurrentTransactionContainer);
