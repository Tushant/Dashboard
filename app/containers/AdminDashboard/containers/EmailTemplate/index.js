import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import AdminEditor from "./AdminEditor";
import Dropzone from "react-dropzone";

import TextFieldGroup from "utils/textFieldGroup";
import { fetchEmailTemplate, fetchEmailTemplateByID } from "./actions";
import { selectEmailTemplate, selectEmailTemplateByID } from "./selectors";

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
  loadEmailTemplate: () => dispatch(fetchEmailTemplate()),
  loadEmailTemplateById: id => dispatch(fetchEmailTemplateByID(id))
});

const mapStateToProps = createStructuredSelector({
  emailTemplate: selectEmailTemplate(),
  emailTemplateByID: selectEmailTemplateByID()
});

class EmailTemplate extends React.Component {
  state = {
    template: {
      template_name: {},
      email_subject: "",
      email_from: "",
      template_content: "",
      files: ""
    },
    accepted: [],
    rejected: [],
    errors: {},
    stateOfEditor: null
  };

  componentDidMount() {
    this.props.loadEmailTemplate();
  }

  componentWillReceiveProps(nextProps) {
    const { emailTemplate } = this.props;
    if (nextProps.emailTemplate) {
      const templateNames = nextProps.emailTemplate.get("dataList").toJS();
      this.setState(state => ({
        template: { ...state.template, template_name: templateNames }
      }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.emailTemplateByID !== this.props.emailTemplateByID) {
      console.log(
        "prevProps",
        prevProps.emailTemplateByID,
        this.props.emailTemplateByID
      );
      this.props.emailTemplateByID
        .entrySeq()
        .map(([key, value]) => {
          this.setState(state => ({
            template: { ...state.template, [key]: value }
          }));
        })
        .toArray();
    }
  }

  handleChange = event => {
    const fieldName = event.target.name;
    console.log("fieldName", fieldName);
    this.setState(
      {
        template: {
          ...this.state.template,
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
      if (this.state.template[field].length === 0) {
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
    if (this.validateField(["template_name", "email_subject", "email_from"])) {
      console.log("you can now submit the data");
    }
  };

  setEditorState = stateOfEditor => this.setState({ stateOfEditor });

  onDrop = (accepted, rejected) => {
    this.setState({
      accepted,
      rejected
    });
  };

  handleRemove = file => {
    const newState = this.state.accepted;
    if (newState.indexOf(file) > -1) {
      newState.splice(newState.indexOf(file), 1);
      this.setState({ accepted: newState });
    }
  };

  showFiles() {
    const { accepted } = this.state;
    return (
      <div>
        <h3>Dropped files: </h3>
        <ul className="gallery">
          {accepted.map((file, idx) => {
            return (
              <div className="col-md-3" key={idx}>
                <li>
                  <img
                    src={file.preview}
                    className="img-fluid img-responsive"
                    width={200}
                    alt={file.name}
                  />
                  <i
                    className="fa fa-remove"
                    onClick={e => this.handleRemove(file)}
                  />
                  <div className="imageName">{file.name}</div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  handleOptionSelect(event) {
    this.props.loadEmailTemplateById(event.target.value);
  }

  renderOption = () => {
    const { template_name } = this.state.template;
    return template_name.map(name => {
      return (
        <option key={name._id} value={name._id}>
          {name.template_name}
        </option>
      );
    });
  };

  render() {
    const { errors, template, stateOfEditor, accepted } = this.state;
    console.log(
      "state",
      this.props.emailTemplateByID && this.props.emailTemplateByID.toJS()
    );
    const json = JSON.stringify(this.props.emailTemplate, null, 4);
    return (
      <form onSubmit={this.handleSubmit}>
        <select
          className="form-control"
          onChange={event => this.handleOptionSelect(event)}
        >
          <option>
            {template.template_name.length > 0 ? "select" : "loading..."}
          </option>
          {template.template_name.length > 0 && this.renderOption()}
        </select>
        <TextFieldGroup
          id="formControlsText"
          name="email_subject"
          type="text"
          value={template.email_subject}
          label="Email Subject"
          placeholder="Enter Email Subject"
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          error={errors.email_subject}
          required
        />
        <TextFieldGroup
          id="formControlsText"
          name="email_from"
          type="email"
          value={template.email_from}
          label="Email From"
          placeholder="Enter Email From"
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          error={errors.email_from}
          required
        />
        <AdminEditor
          setEditorState={this.setEditorState}
          stateOfEditor={stateOfEditor}
        />
        <Dropzone
          onDrop={this.onDrop}
          style={style}
          activeStyle={activeStyle}
          multiple
          accept="image/*"
        >
          Try dropping file here or click to upload{" "}
        </Dropzone>
        {errors.accepted &&
          <p className="help-block alert alert-danger">{errors.accepted}</p>}
        {accepted.length !== 0 && this.showFiles()}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={
            !template.template_name ||
              !template.email_subject ||
              !template.email_from ||
              !stateOfEditor
          }
        >
          Submit
        </button>
        <pre>{json && json}</pre>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailTemplate);
