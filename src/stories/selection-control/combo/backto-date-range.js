import React, { useEffect, useState } from "react";
import FormSelect from "./../../hook-controls/select";
import { GetBackTo } from "./../../../module/job-execution-plan/api";
function ComboBackToDateRange(props) {
  const [Data, setData] = useState([]);
  useEffect(() => {
    getBackToCmb();
  }, []);
  const getBackToCmb = () => {
    let data = GetBackTo();
    //const cbo= data&&data.map(({ TYPE_DESC: label, TYPE_ID: id }) =>({ label, id }));
    setData(data);
  };
  return (
    <>
      <FormSelect {...props} options={Data} />
    </>
  );
}

export default ComboBackToDateRange;
