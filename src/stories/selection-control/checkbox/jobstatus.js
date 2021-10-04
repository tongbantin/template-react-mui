import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormCheckbox from "./../../hook-controls/checkbox";
//Api
import { GetJobStatusList } from "./../../../module/master/api";
function CheckboxJobStatus(props) {
  const [Data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await GetJobStatusList();
      setData(data);
    })();
  }, [setData]);
  return (
    <>
      <Box display="flex"  className="checkboxBox">
        {" "}
        <Box className="checkboxHeader" justifyContent="flex-end">
          <Typography variant="caption" display="block" gutterBottom>
            Job Status
          </Typography>
        </Box>
        <Box className="checkboxList" display="flex" pl={3} flexWrap="wrap" flexGrow={1}>
          {Data?.map((el) => (
            <FormCheckbox
              {...props}
              key={el.STATUS_ID}
              label={el.STATUS_TEXT}
              value={el.STATUS_ID}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default CheckboxJobStatus;
