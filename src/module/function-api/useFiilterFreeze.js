import React, { useState } from "react";

export function useFiilterFreeze(Search = () => {}) {
  const [FreezeRow, setFreezeRow] = useState([]);
  function OnChange(row) {
    let found = FreezeRow.find((el) => el.HISTORY_ID === row.HISTORY_ID);
    if (!found) {
      setFreezeRow((prev) => [...prev, row]);
    } else {
      setFreezeRow((prev) => prev.filter((x) => x.HISTORY_ID !== row.HISTORY_ID));
      Search();
    }
  }
  function isChecked(row) {
    let freezelst = FreezeRow.map(el=>el.HISTORY_ID)
    return freezelst.includes(row.HISTORY_ID);
  }
  return {
    FreezeRow,
    OnChange,
    isChecked,
  };
}
