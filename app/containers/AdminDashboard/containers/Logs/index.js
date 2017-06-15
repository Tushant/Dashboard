import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { logRequest } from "./actions";
import { selectLogs } from "./selectors";
import Spinner from "assets/backend/img/earthSpinning.svg";

const mapDispatchToProps = dispatch => ({
  requestLogs: () => dispatch(logRequest())
});

const mapStateToProps = createStructuredSelector({
  logs: selectLogs()
});

class Logs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: {}
    };
  }
  componentDidMount() {
    this.props.requestLogs();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.logs) {
      nextProps.logs
        .entrySeq()
        .map(([key, value]) => {
          this.setState(state => ({
            logs: { ...state.logs, [key]: value }
          }));
        })
        .toArray();
    }
  }
  render() {
    const { logs } = this.state;
    console.log("logs", logs);
    if (logs.size === 0) {
      return <div><img src={Spinner} alt="spinner" /></div>;
    }
    return <div>Error logs</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logs);
