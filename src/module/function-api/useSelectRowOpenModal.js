import React, { useState } from "react";
import PropTypes from "prop-types";

export function useSelectRowOpenModal(props) {
  const [Open, setOpen] = useState(false);
  const [Data, setData] = useState();
  return {
    isOpen: Open,
    close: () => {
      setOpen(false);
    },
    toggle: () => {
      setOpen((prev) => !prev);
    },
    Data,
    setData,
    handleClickRow: (data) => {
      setOpen(true);
      setData(data);
    },
  };
}

useSelectRowOpenModal.propTypes = {};
