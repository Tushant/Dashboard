import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Dropzone from "react-dropzone";

import TextFieldGroup from "utils/textFieldGroup";
import { fetchAnalytics, analyticsRequest } from "./actions";
import { selectAnalytics } from "./selectors";

const style = {
  borderWidth: 2,
  borderColor: "black",
  borderStyle: "dashed",
  borderRadius: 4,
  margin: 30,
  padding: 30,
  width: 200,
  transition: "all 0.5s"
};

const activeStyle = {
  borderStyle: "solid",
  backgroundColor: "#eee",
  borderRadius: 8
};

const mapDispatchToProps = dispatch => ({
  fetchAnalytics: () => dispatch(fetchAnalytics()),
  analyticsRequest: analytics => dispatch(analyticsRequest(analytics))
});

const mapStateToProps = createStructuredSelector({
  analytics: selectAnalytics()
});

class GoogleAnalytics extends React.PureComponent {
  state = {
    files: "",
    analytics: {
      tracking_id: "",
      polling_interval: "",
      analytics_view_id: "",
      document_name: ""
    },
    errors: {}
  };

  componentDidMount() {
    this.props.fetchAnalytics();
  }

  componentWillReceiveProps(nextProps, prevProps) {
    if (nextProps.analytics) {
      nextProps.analytics
        .entrySeq()
        .map(([key, value]) => {
          this.setState(state => ({
            analytics: { ...state.analytics, [key]: value }
          }));
        })
        .toArray();
    }
  }

  handleChange = event => {
    const fieldName = event.target.name;
    this.setState(
      {
        analytics: {
          [event.target.name]: event.target.value
        }
      },
      () => {
        this.validateField([fieldName]);
      }
    );
  };

  handleBlur = event => {
    const fieldName = event.target.name;
    this.validateField([fieldName]);
  };

  validateField = validate => {
    const errors = { ...this.state.errors };
    let hasError = false;
    validate.forEach(field => {
      console.log("field", field);
      if (this.state.analytics[field].length === 0) {
        hasError = true;
        errors[field] = `${field} cannot be empty`;
      } else {
        errors[field] = "";
      }
    });
    this.setState({ errors });
    return !hasError;
  };

  handleSubmit = event => {
    event.preventDefault();
    const { analytics, files } = this.state;
    if (
      this.validateField([
        "tracking_id",
        "analytics_view_id",
        "polling_interval",
        "document_name"
      ])
    ) {
      console.log("you can now submit the data");
      this.props.analyticsRequest(this.state.analytics);
    }
  };

  onDrop = files => {
    this.setState({
      analytics: {
        ...this.state.analytics,
        document_name: files
      }
    });
  };

  render() {
    const { errors, analytics } = this.state;
    if (this.props.analytics.size === 0) {
      return <div>fetching...</div>;
    }
    return (
      <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
        <TextFieldGroup
          name="tracking_id"
          type="text"
          value={analytics.tracking_id}
          label="Tracking Id"
          placeholder="Enter Tracking Id"
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          error={errors.trackingId}
          required
        />
        <TextFieldGroup
          id="formControlsText"
          name="analytics_view_id"
          type="text"
          value={analytics.analytics_view_id}
          label="View Id"
          placeholder="Enter View Id"
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          error={errors.viewId}
          required
        />
        <TextFieldGroup
          id="formControlsText"
          name="polling_interval"
          type="number"
          value={analytics.polling_interval}
          label="Polling Interval (For Realtime data)"
          placeholder="Enter Polling Interval"
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          error={errors.pollingInterval}
          required
        />
        <Dropzone
          onDrop={this.onDrop}
          style={style}
          activeStyle={activeStyle}
          multiple={false}
          accept=".json"
        >
          Try dropping json file here or click to upload{" "}
        </Dropzone>
        {errors.document_name &&
          <p className="help-block alert alert-danger">
            {errors.document_name}
          </p>}
        {analytics.document_name &&
          <li>
            {analytics.document_name[0].name}
            {" "}
          </li>}
        <button className="btn btn-primary">Save changes</button>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAnalytics);
