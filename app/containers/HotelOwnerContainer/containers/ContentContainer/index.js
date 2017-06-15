/**
 * Created by Edge on 5/30/2017.
 */


import React from 'react';
import { connect } from 'react-redux';
import Content from '../../components/Content';
import {  } from './actions';
// import PropTypes from 'prop-types';

export class ContentContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
  };

  componentWillMount() {

  }

  render() {
    return (
      <Content {...this.props}/>
    );
  }
}

export default connect(null)(ContentContainer);
