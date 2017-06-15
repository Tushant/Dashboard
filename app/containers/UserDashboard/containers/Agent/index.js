import React from "react";
import TextFieldGroup from "utils/textFieldGroup";

class AppyForAgent extends React.Component {
  constructor() {
    super();
    this.state = {
      hotel_info: {
        phone_number: "",
        hotel_name: "",
        hotel_phone_number: "",
        hotel_fax_number: "",
        hotel_contact_person: "",
        hotel_email_address: "",
        hotel_registration_number: "",
        number_of_rooms: "",
        hotel_location: "",
        website_url: "",
        property_type: ""
      },
      errors: {}
    };
  }

  handleChange = event => {
    const fieldName = event.target.name;
    this.setState(
      {
        hotel_info: {
          ...this.state.hotel_info,
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
      if (this.state.hotel_info[field].length === 0) {
        hasError = true;
        errors[field] = `${field} cannot be empty`;
      } else {
        errors[field] = "";
      }
    });
    this.setState({ errors });
    return !hasError;
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <h2>Hotel Information</h2>
        <div className="row">
          <div className="col-md-6">
            <TextFieldGroup
              id="formControlsText"
              name="phone_number"
              type="text"
              label="Phone Number"
              placeholder="Phone Number"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={errors.phone_number}
              required
            />
            <TextFieldGroup
              id="formControlsText"
              name="hotel_name"
              type="text"
              label="Hotel Name"
              placeholder="Hotel Name"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={errors.hotel_name}
              required
            />
            <TextFieldGroup
              id="formControlsText"
              name="hotel_phone_number"
              type="text"
              label="Hotel Phone Number"
              placeholder="Hotel Phone Number"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={errors.hotel_phone_number}
              required
            />
            <TextFieldGroup
              id="formControlsText"
              name="hotel_fax_number"
              type="text"
              label="Hotel Fax Number"
              placeholder="Hotel Fax Number"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={errors.hotel_fax_number}
              required
            />
            <TextFieldGroup
              id="formControlsText"
              name="hotel_contact_person"
              type="text"
              label="Hotel Contact Person"
              placeholder="Hotel Contact Person"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={errors.hotel_contact_person}
              required
            />
            <TextFieldGroup
              id="formControlsText"
              name="hotel_email_address"
              type="text"
              label="Hotel Email Address"
              placeholder="Hotel Email Address"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={errors.hotel_email_address}
              required
            />
          </div>
          <div className="col-md-6">
            <TextFieldGroup
              id="formControlsText"
              name="hotel_registration_number"
              type="text"
              label="Hotel Registration Number"
              placeholder="Hotel Registration Number"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={errors.hotel_registration_number}
              required
            />
            <TextFieldGroup
              id="formControlsText"
              name="number_of_rooms"
              type="text"
              label="Number of Rooms"
              placeholder="Number of Rooms"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={errors.number_of_rooms}
              required
            />
            <TextFieldGroup
              id="formControlsText"
              name="hotel_location"
              type="text"
              label="Hotel Location"
              placeholder="Hotel Location"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={errors.hotel_location}
              required
            />
            <TextFieldGroup
              id="formControlsText"
              name="website_url"
              type="text"
              label="Website URL"
              placeholder="Website URL"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={errors.website_url}
              required
            />
            <TextFieldGroup
              id="formControlsText"
              name="property_type"
              type="text"
              label="Property Type"
              placeholder="Property Type"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={errors.property_type}
              required
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AppyForAgent;
