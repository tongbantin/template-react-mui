import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormCheckbox from "../../hook-controls/checkbox";
//Api
import { GetRolesList } from "../../../module/master/api";

function CheckboxRole(props) {
  const [Data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await GetRolesList();
      setData(data);
    })();
  }, [setData]);
  return (
    <>
      <Box mt={3.5} display="flex" className="checkboxBox">
        {" "}
        <Box className="checkboxHeader" justifyContent="flex-end">
          <Typography variant="caption" display="block" gutterBottom>
            Roles
          </Typography>
        </Box>
        <Box
          className="checkboxList"
          display="flex"
          flexWrap="wrap"
          flexGrow={1}
          m={1}
        >
          {Data?.map((el) => (
            <FormCheckbox
              {...props}
              key={el.ROLE_ID}
              value={el.ROLE_ID}
              label={el.ROLE_DESC}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default CheckboxRole;
