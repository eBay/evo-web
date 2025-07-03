/* eslint camelcase: "off" */
import { createcontent } from "../../../../common/test-utils/shared";

export const Default_Details = {
  summary: {
    content: createcontent("open"),
  },
  content: createcontent("body content"),
};

export const Open_Details = Object.assign({}, Default_Details, {
  open: true,
});
