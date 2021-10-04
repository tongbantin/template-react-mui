import React, { useEffect, useState,useCallback } from "react";
import FormSelect from "../../hook-controls/select";
import { GetDependencyDataDateTypeList } from "../../../module/master/api";
function ComboDepDataDateType(props) {
  const [Data, setData] = useState([]);
  const GetListDataDateTypecbx = useCallback(
    async () => {
      let data = await GetDependencyDataDateTypeList();
      const cbo= data&&data.map(({ DEP_DATADATE_TYPE_NAME: label, DEP_DATADATE_TYPE_ID: id }) =>({ label, id }));
      setData(cbo);
    },
    [setData],
  )
  useEffect(() => {
    GetListDataDateTypecbx();
  }, [GetListDataDateTypecbx]);
  
  return (
    <>
      <FormSelect {...props} options={Data} />
    </>
  );
}

export default ComboDepDataDateType;
