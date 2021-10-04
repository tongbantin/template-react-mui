import React, { useEffect, useState } from "react";
import FormSelect from "./../../hook-controls/select";
import { GetScheduleList } from "./../../../module/master/api";
export function ScheduleType({isRerun,...props}) {
  const [SchduleCmb, setSchduleCmb] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      let data = await GetScheduleList();
      const cbo =
        data &&
        data.map(({ TYPE_DESC: label, TYPE_ID: id }) => ({
          label,
          id,
          disabled: ![1, 2].includes(id) && isRerun,
        }));
      setSchduleCmb(cbo);
    };
    fetch();
  }, [setSchduleCmb,isRerun]);
  return (
    <>
      <FormSelect {...props} options={SchduleCmb} />
    </>
  );
}
