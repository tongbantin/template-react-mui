import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormCheckbox from "./../../hook-controls/checkbox";
//Api
import { GetJobTypeList } from "./../../../module/master/api";
function CheckboxJobtype(props) {
  const [Data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await GetJobTypeList();
      setData(data);
    })()
  }, [setData]);
  return (
    <>
      <Box display="flex" className="checkboxBox">
        {" "}
        <Box justifyContent="flex-end" className="checkboxHeader" >
          <Typography variant="caption" display="block" gutterBottom>
            Job Type
          </Typography>
        </Box>
        <Box display="flex" pl={3} flexWrap="wrap" flexGrow={1} className="checkboxList" >
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

export default CheckboxJobtype;
