import moment from "moment";
import { apiError } from "./alert";
import { ToDateTimeText } from "./date";
import humanizeString from "humanize-string";

export function to(promise) {
  return promise
    .then((data) => {
      return {
        error: null,
        result: data,
      };
    })
    .catch((err) => {
      return {
        error: err,
      };
    });
}
export function to_raw(promise) {
  return promise
    .then((data) => {
      return data;
    })
    .catch((err) => {
      apiError(err);
      return {
        error: err,
      };
    });
}
export const MergeArrayByKey = (arr1, key1, arr2, key2) => {
  let merged = [];
  for (let i = 0; i < arr1.length; i++) {
    merged.push({
      ...arr1[i],
      ...arr2.find((itmInner) => itmInner[key2] === arr1[i][key1]),
    });
  }
  return merged;
};
export const setDataToFormHook = (obj, fieldDate) => {
  let lstfield = [];
  for (var name in obj) {
    var value = obj[name];
    if (fieldDate && fieldDate.includes(name)) {
      lstfield.push({ [name]: ToDateTimeText(value) });
    } else {
      lstfield.push({ [name]: value });
    }
  }
  return lstfield;
};
export const setDataToFormHookV2 = (obj, fieldDate = []) => {
  let lstfield = [];
  for (var name in obj) {
    var value = obj[name];
    if (fieldDate && fieldDate.includes(name)) {
      lstfield.push({ name: name, value: ToDateTimeText(value) });
    } else {
      lstfield.push({ name: name, value: value ===null ? "" : value});
    }
  }
  return lstfield;
};
// export const formatDate = (date) => {
//   if (date === null || date === "") {
//     return "";
//   }
//   var d = new Date(moment(date).toDate()),
//     month = "" + (d.getMonth() + 1),
//     day = "" + d.getDate(),
//     year = d.getFullYear();

//   if (month.length < 2) month = "0" + month;
//   if (day.length < 2) day = "0" + day;

//   return [year, month, day].join("-");
// };
// export const formatDateTime = (date) => {
//   if (date === null || date === "") {
//     return "";
//   }
//   var d = moment(date).format("yyyy-MM-DD HH:mm:ss");
//   return d;
// };
export const DateTimeToString = (date) => {
  //For send .netCore api
  if (date === null || date === "") {
    return "";
  }
  var m = date;
  var dateString =
    m.getUTCFullYear() +
    "-" +
    ("0" + (m.getUTCMonth() + 1)).slice(-2) +
    "-" +
    ("0" + m.getUTCDate()).slice(-2) +
    "T" +
    ("0" + m.getUTCHours()).slice(-2) +
    ":" +
    ("0" + m.getUTCMinutes()).slice(-2) +
    ":" +
    ("0" + m.getUTCSeconds()).slice(-2);
  return dateString;
};
export function displayTime(ticksInSecs) {
  if (!ticksInSecs) return null;
  var ticks = ticksInSecs / 10000000;
  var hh = Math.floor(ticks / 3600);
  var mm = Math.floor((ticks % 3600) / 60);
  var ss = ticks % 60;

  return pad(hh, 2) + ":" + pad(mm, 2) + ":" + pad(ss, 2);
}

export function pad(n, width) {
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join("0") + n;
}
export const ToDateTime = (datetimeortime) => {
  //For send .netCore api
  let datetime = moment(datetimeortime).format("YYYY-MM-DDTHH:mm:ss");
  if (!(datetime === "Invalid date" || isNaN(datetime))) {
    return datetime;
  }
  //if onlytime
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd + "T" + datetimeortime;
  let time = moment(today).format("YYYY-MM-DDTHH:mm:ss");
  if (!(time === "Invalid date" || isNaN(time))) {
    return time;
  }
  return null;
};
export function isFunction(functionToCheck) {
  //return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
  return functionToCheck instanceof Function;
}
export function isEmptyArray(obj) {
  // null and undefined are "empty"
  if (obj === null || obj === undefined) return true;

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;

  // If it isn't an object at this point
  // it is empty, but it can't be anything *but* empty
  // Is it empty?  Depends on your application.
  if (typeof obj !== "object") return true;

  // Otherwise, does it have any properties of its own?
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }

  return true;
}
export function isEmptyObj(obj) {
  if (obj === null || obj === undefined) return true;
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
export function isEquivalent(a, b) {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length !== bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}
export const ArrayTextReduce = (array) => {
  let li = array && array.reduce((acc, item) => { return `${acc}<li>${item}</li> ` }, "")
  return li
}
export function isEmptyStr(str) {
  return !str || 0 === str.length || str.match(/^ *$/) !== null||typeof str === 'undefined';
}
export function moveItem(data = [], index, delta) {
  let array = data.map((x) => x);
  //console.log('move', array, index, delta);

  var newIndex = index + delta;
  if (newIndex < 0 || newIndex === array.length) return; //Already at the top or bottom.
  var indexes = [index, newIndex].sort((a, b) => a - b); //Sort the indixes (fixed)
  array.splice(indexes[0], 2, array[indexes[1]], array[indexes[0]]); //Replace from lowest index, two elements, reverting the order
  return array;
}
export function objectsAreSame(x, y) {
  var objectsAreSame = true;
  for (var propertyName in x) {
    if (x[propertyName] !== y[propertyName]) {
      objectsAreSame = false;
      break;
    }
  }
  return objectsAreSame;
}
export const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
export function humanize(str) {
  return humanizeString(str);
  // return str
  //     .replace(/^[\s_]+|[\s_]+$/g, '')
  //     .replace(/[_\s]+/g, ' ')
  //     .replace(/^[a-z]/, function(m) { return m.toUpperCase(); });
}
export function titleCase(string) {
  if (isEmptyStr(string)) return "";
  string = string.replace(/_/g, " ");
  var sentence = string.toLowerCase().split(" ");
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(" ");
}
export function update_array(original_arr, new_arr, keyname = "") {
  if (keyname === "") return original_arr;
  let result = original_arr.map((original_el) => {
    let new_el = new_arr.find((el) => el[keyname] === original_el[keyname]);
    return new_el ? { ...original_el, ...new_el } : original_el;
  });
  return result;
}
export function remove_array(original_arr, new_arr, keyname = "") {
  if (keyname === "") return original_arr;
  let result = original_arr.filter(
    (el) => !new_arr.map((item) => item[keyname]).includes(el[keyname])
  );
  // let result = original_arr.map(original_el => {
  //   let new_el = new_arr.find(el => el[keyname] === original_el[keyname]);
  //   return new_el ? { ...original_el, ...new_el } : original_el;
  // })
  return result;
}
export function concat_array_nodup(original_arr, new_arr, keyname = "") {
  let data_with_update = update_array(original_arr, new_arr, keyname);
  let exists_keys = data_with_update?.map(el=>el[keyname]);
  let new_only = new_arr?.filter(el=>!exists_keys.includes(el[keyname]))
  let result = (new_only || []).concat(data_with_update);
  return result;
}

export function validateJSON(string) {
  try {
    JSON.parse(string);
    return true;
  } catch (error) {
    return false;
  }
}

export function validateJSONArray(string) {
  try {
    var obj = JSON.parse(string);
    if (obj.constructor === Array) return true;
    else return false;
  } catch (error) {
    return false;
  }
}
