import React from "react";
//Material
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

//Component

//Context

//Function

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);
const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
export default function Modal({ children, ...props }) {
  const {
    open,
    onClose,
    onSave,
    CloseText = "Close",
    SaveText = "Save",
    className,
    title,
    hiddenSave = false,
    ...otherprops
  } = props;
  return (
    <>
      <Dialog
        {...otherprops}
        aria-labelledby="customized-dialog-title"
        open={open}
        onClose={onClose}
        fullWidth
      >
        <DialogTitle id="customized-dialog-title" className={className}>
          {title}
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions className="btnDialog">
          {hiddenSave ? null : (
            <Button onClick={onSave} color="primary">
              {SaveText}
            </Button>
          )}

          <Button onClick={onClose} color="primary">
            {CloseText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
