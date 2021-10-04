import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormCheckbox from "../../hook-controls/checkbox";
//Api
import { GetPlanStatusList } from "../../../module/master/api";
function CheckboxJobStatus(props) {
  const [Data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await GetPlanStatusList();
      setData(data);
    })();
  }, [setData]);

  return (
    <>
      <Box display="flex" className="checkboxBox">
        {" "}
        <Box justifyContent="flex-end" className="checkboxHeader">
          <Typography variant="caption" display="block" gutterBottom>
            Plan Status
          </Typography>
        </Box>
        <Box display="flex" className="checkboxList" pl={3} flexWrap="wrap" flexGrow={1}>
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
