import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormCheckbox from "../../hook-controls/checkbox";
//Api
import { GetExecutionTypeList } from "../../../module/master/api";
function CheckboxExecutionType(props) {
  const [Data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await GetExecutionTypeList();
      setData(data);
    })();
  }, [setData]);
  return (
    <>
      <Box display="flex" className="checkboxBox">
        {" "}
        <Box className="checkboxHeader" justifyContent="flex-end">
          <Typography variant="caption" display="block" gutterBottom>
            Execution Type
          </Typography>
        </Box>
        <Box className="checkboxList" display="flex" pl={3} flexWrap="wrap" flexGrow={1}>
          {Data?.map((el) => (
            <FormCheckbox
              {...props}
              key={el.TYPE_ID}
              label={el.TYPE_TEXT}
              value={el.TYPE_ID}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default CheckboxExecutionType;
