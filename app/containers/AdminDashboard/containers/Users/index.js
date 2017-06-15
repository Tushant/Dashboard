import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { loadUsers } from "./actions";
import { selectUsers } from "./selectors";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(loadUsers())
});

const mapStateToProps = createStructuredSelector({
  users: selectUsers()
});

class UserList extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    const { users } = this.props;
    if (users.size === 0) {
      return <div>loading</div>;
    }
    const selectRowProp = {
      mode: "checkbox",
      clickToSelect: true,
      className: "custom-select-class",
      bgColor: "#2863a0",
      color: "#fff"
    };
    return (
      <div>
        <h1>Users List</h1>
        <BootstrapTable
          data={users.get("dataList").toJS()}
          pagination
          selectRow={selectRowProp}
          deleteRow
          exportCSV
          striped
          hover
          search
        >
          <TableHeaderColumn dataField="_id" isKey={true} dataSort>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="first_name" dataSort>
            First Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField="email">
            Email
          </TableHeaderColumn>
          <TableHeaderColumn dataField="user_role">
            Role
          </TableHeaderColumn>
          <TableHeaderColumn dataField="confirmed">
            Confirmed
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
