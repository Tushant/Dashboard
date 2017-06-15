import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { loadAgents } from "./actions";
import { selectAgents } from "./selectors";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

const mapDispatchToProps = dispatch => ({
  fetchAgent: () => dispatch(loadAgents())
});

const mapStateToProps = createStructuredSelector({
  agents: selectAgents()
});

class AgentList extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchAgent();
  }
  render() {
    const { agents } = this.props;
    if (agents.size === 0) {
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
        <h1>Agents List</h1>
        <BootstrapTable
          data={agents.get("dataList").toJS()}
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

export default connect(mapStateToProps, mapDispatchToProps)(AgentList);
