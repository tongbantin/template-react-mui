import React, { useState, useEffect } from "react";
import { isEmptyArray } from "./../../utils/common-function";
export function useSelectItem( key,defaultSelect = []) {
  const [SelectedItems, setSelectedSelectedItems] = useState([]);
  useEffect(() => {
    if(isEmptyArray(defaultSelect)) return
    setSelectedSelectedItems(defaultSelect)
    // setSelectedSelectedItems((prev) =>
    //   prev
    //     .filter((el) => !defaultSelect.map((e) => e[key])?.includes(el[key]))
    //     .concat(defaultSelect)
    // );
  }, [defaultSelect, key]);
  const handleOnSelect = (row, isSelect) => {
    if (isSelect) {
      setSelectedSelectedItems((prev) => [...prev, row[key]]);
    } else {
      setSelectedSelectedItems((prev) => prev.filter((x) => x !== row[key]));
    }
  };
  const handleOnSelectAll = (isSelect, rows) => {
    if (isSelect) {
      setSelectedSelectedItems(rows.map(el=>el[key]));
    } else {
      setSelectedSelectedItems([]);
    }
  };
  return {
    SelectedItems,
    handleOnSelect,
    handleOnSelectAll,
  };
}
