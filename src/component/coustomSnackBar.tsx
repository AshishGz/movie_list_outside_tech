import React, { FC, ReactElement, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Director } from "../interfaces/movie";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

interface Props {
  openSnackBar: boolean;
  onHandleClose: any;
  message: string;
  type: any;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// This is coustom snack bar used in app,
// just pass type of bar as (success , error , info or wraning ), close method, messsage and open state

const CoustomSnackBar: FC<Props> = ({
  openSnackBar,
  onHandleClose,
  message,
  type,
}): ReactElement => {
  const [open, setOpen] = React.useState(openSnackBar);

  useEffect(() => {
    setOpen(openSnackBar);
  }, [openSnackBar]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={2000}
        onClose={onHandleClose}
      >
        <Alert severity={type}>{message}</Alert>
      </Snackbar>
    </div>
  );
};
export default CoustomSnackBar;
