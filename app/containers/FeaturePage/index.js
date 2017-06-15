/*
 * FeaturePage
 *
 * List all the features
 */
import React from "react";
import Helmet from "react-helmet";
import { FormattedMessage } from "react-intl";

import messages from "./messages";

export default class FeaturePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="Feature Page"
          meta={[
            {
              name: "description",
              content: "Feature page of React.js Boilerplate application"
            }
          ]}
        />
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <ul>
          <li>
            <p><FormattedMessage {...messages.scaffoldingHeader} /></p>
            <p>
              <FormattedMessage {...messages.scaffoldingMessage} />
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
