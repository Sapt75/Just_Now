import maintenancePageConfig from './maintenance/maintenancePageConfig';
import activitiesPageConfig from './activities/activitiesPageConfig';
import authenticationPagesConfig from './authentication/authenticationPagesConfig';
import comingSoonPagesConfig from './coming-soon/comingSoonPagesConfig';
import invoicePagesConfig from './invoice/invoicePagesConfig';
import errorPagesConfig from './error/errorPagesConfig';
import pricingPagesConfig from './pricing/pricingPagesConfig';
import searchPagesConfig from './search/searchPagesConfig';
import userConfig from './users/userConfig';
import inquiriesConfig from './inquiries/inquiriesConfig';
import myprofileConfig from './myprofile/myprofileConfig'
import changepasswordConfig from './changepassword/changepasswordConfig';
import settingsConfig from './settings/settingsConfig';
import AllPagesConfig from './All Pages/all_pagesConfigs';
import mastersConfig from './Masters/mastersConfig'
import manageConfig from './Manage/manageConfig'
import addcarConfig from './Add Car/addcarConfig'
import specConfig from './Add Spec/specConfig'


let pagesConfigs = [
  ...authenticationPagesConfig,
  comingSoonPagesConfig,
  errorPagesConfig,
  addcarConfig,
  specConfig,
  AllPagesConfig,
  mastersConfig,
  manageConfig,
  userConfig,
  inquiriesConfig,
  settingsConfig,
  myprofileConfig,
  changepasswordConfig,
  maintenancePageConfig,
  invoicePagesConfig,
  activitiesPageConfig,
  pricingPagesConfig,
  searchPagesConfig,
];

let manager = [
  ...authenticationPagesConfig,
  comingSoonPagesConfig,
  errorPagesConfig,
  manageConfig,
  settingsConfig,
  myprofileConfig,
  changepasswordConfig,
  maintenancePageConfig,
  invoicePagesConfig,
  activitiesPageConfig,
  pricingPagesConfig,
  searchPagesConfig,]

let editor = [
  ...authenticationPagesConfig,
  comingSoonPagesConfig,
  errorPagesConfig,
  addcarConfig,
  specConfig,
  settingsConfig,
  myprofileConfig,
  changepasswordConfig,
  maintenancePageConfig,
  invoicePagesConfig,
  activitiesPageConfig,
  pricingPagesConfig,
  searchPagesConfig,]


let user = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")).urole : null


if (user === "manager") {
  pagesConfigs = manager
} else if (user === "editor") {
  pagesConfigs = editor
}


export default pagesConfigs;
