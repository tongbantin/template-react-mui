import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function MenuPopupState(props) {
  const { children, items } = props;
  return (
    
      <PopupState popupId="demo-popup-menu" variant="popover">
        {(popupState) => (
          <React.Fragment>
            <Button variant="contained" className="btn btn-secondary dropdown-toggle" {...bindTrigger(popupState)}>
              {children}
            </Button>
            <Menu {...bindMenu(popupState)}>
              {items?.map((el) => (
                <MenuItem onClick={el.method} key={el.name}>{el.name}</MenuItem>
              ))}
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
  );
}
