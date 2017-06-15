import React from "react";
import { Switch } from "react-router-dom";
import AsyncRoute from "routing/AsyncRoute";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeSelectLocation } from "containers/App/selectors";
import loadCommissionPage from "../containers/Commission/loader";
import loadEmailTemplatePage from "../containers/EmailTemplate/loader";
import loadEmailServicePage from "../containers/EmailService/loader";
import loadCloudinaryPage from "../containers/Cloudinary/loader";
import loadAnalyticsPage from "../containers/Analytics/loader";
import loadLogsPage from "../containers/Logs/loader";
import loadUsersPage from "../containers/Users/loader";
import loadAgentsPage from "../containers/Agents/loader";
import loadRolesPage from "../containers/Roles/loader";
import loadParentPage from "../containers/ParentPage/loader";
import loadNotFoundPage from "containers/NotFoundPage/loader";

function AdminRoutes({ location, cloudinary }) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <Switch location={location}>
          <AsyncRoute
            exact
            path="/admin/dashboard/home"
            load={loadParentPage}
          />
          <AsyncRoute
            exact
            path="/admin/dashboard/commission"
            load={loadCommissionPage}
          />
          <AsyncRoute
            exact
            path="/admin/dashboard/email_template"
            load={loadEmailTemplatePage}
          />
          <AsyncRoute
            exact
            path="/admin/dashboard/email_service"
            load={loadEmailServicePage}
          />
          <AsyncRoute
            exact
            path="/admin/dashboard/cloudinary"
            load={loadCloudinaryPage}
          />
          <AsyncRoute
            exact
            path="/admin/dashboard/analytics"
            load={loadAnalyticsPage}
          />
          <AsyncRoute
            exact
            path="/admin/dashboard/users"
            load={loadUsersPage}
          />
          <AsyncRoute
            exact
            path="/admin/dashboard/agents"
            load={loadAgentsPage}
          />
          <AsyncRoute exact path="/admin/dashboard/logs" load={loadLogsPage} />
          <AsyncRoute
            exact
            path="/admin/dashboard/roles"
            load={loadRolesPage}
          />
          <AsyncRoute exact path="*" load={loadNotFoundPage} />
        </Switch>
      </div>
    </div>
  );
}

AdminRoutes.propTypes = {
  location: React.PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation()
});

export default connect(mapStateToProps)(AdminRoutes);
