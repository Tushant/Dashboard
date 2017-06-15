import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchRoles } from "./actions";
import { selectRoles } from "./selectors";
import Spinner from "assets/backend/img/earthSpinning.svg";

const mapDispatchToProps = dispatch => ({
  requestRoles: () => dispatch(fetchRoles())
});

const mapStateToProps = createStructuredSelector({
  roles: selectRoles()
});

class Role extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.requestRoles();
  }
  render() {
    const { roles } = this.props;
    console.log("roles", roles.toJS());
    if (roles.size === 0) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <ul>
          {roles
            .valueSeq()
            .map(role => {
              return <li key={role.get("_id")}>{role.get("role_name")}</li>;
            })
            .toList()
            .toJS()}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Role);
