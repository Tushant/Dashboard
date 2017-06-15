import React from "react";
import { FormattedMessage } from "react-intl";

import LocaleToggle from "containers/LocaleToggle";
import messages from "./messages";

function Footer() {
  return (
    <div>
      <section>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <LocaleToggle />
      </section>
    </div>
  );
}

export default Footer;
