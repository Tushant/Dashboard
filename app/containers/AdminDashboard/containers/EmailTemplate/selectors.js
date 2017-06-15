import { createSelector } from "reselect";

export const selectEmailTemplate = () => state =>
  state.getIn(["emailTemplate", "emailTemplate"]);

export const selectEmailTemplateByID = () => (state, props) => {
  state.getIn(["emailTemplate", "templateDetail"]);
};
