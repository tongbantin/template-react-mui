import moment from "moment";
export const dateMuiformat = "yyyy-MM-dd";
export const dateTimeMuiformat = "yyyy-MM-dd HH:mm";
export const MonthMuiformat = "MMMM-yyyy";
//Text
export const dateformat = "yyyy-MM-DD";
export const dateTimeformat = "yyyy-MM-DD HH:mm";
//For send api
export const ApiDateTimeFormat = "yyyy-MM-DDTHH:mm:ss";


export function MuiDateTimeToApi(params) {
  let date = moment(params).isValid()
    ? moment(params).format(ApiDateTimeFormat)
    : params;
  return date||null;
}

export function HookisvalidDate(data = [], fieldname = []) {
  let result = true;
  for (let idx = 0; idx < fieldname.length; idx++) {
      const el = fieldname[idx];
      if (data[el] && !moment(data[el]).isValid()) return false
  }
  return result;
}
export function ToDateText(params) {
  let date = moment(params).isValid() && params !== undefined
    ? moment(params).format(dateformat)
    : "";
  return date;
}
export function ToMonthText(params) {
  let date = moment(params).isValid() && params !== undefined
    ? moment(params).format(MonthMuiformat)
    : "";
  return date;
}
export function ToDateTimeText(params) {
  let date = moment(params).isValid() && params !== undefined
    ? moment(params).format(dateTimeformat)
    : "";
  return date;
}