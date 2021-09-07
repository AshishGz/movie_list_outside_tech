import React, { FC, ReactElement, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

interface Props {
  openModel: boolean;
  onHandleClose: any;
  component: ReactElement;
}

// This is coustom model to be used through out our app,
// we just need to pass methodToClosse , component inside model and state to open model here

const CustomModel: FC<Props> = ({
  openModel,
  onHandleClose,
  component,
}): ReactElement => {
  const [open, setOpen] = React.useState(openModel);

  useEffect(() => {
    setOpen(openModel);
  }, [openModel]);

  return (
    <div>
      <Dialog
        onClose={onHandleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {component}
      </Dialog>
    </div>
  );
};
export default CustomModel;
