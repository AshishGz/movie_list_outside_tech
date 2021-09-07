import React, { FC, ReactElement, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { APP_STATE } from "../util/config";
import { CircularProgress } from "@material-ui/core";

interface Props {
  appState: APP_STATE;
  mainComponent: any;
}

// This is wrapper component for all the page for handling app sate
// here we need to send app state and main component to render in success

const CustomRenderComponent: FC<Props> = ({
  appState,
  mainComponent,
}): ReactElement => {
  if (APP_STATE.LOADING === appState) {
    return (
      <div className="loading">
        <CircularProgress />
      </div>
    );
  } else if (APP_STATE.ERROR === appState) {
    return <div className="loading">Error Something Went Wrong!</div>;
  } else {
    return <div>{mainComponent}</div>;
  }
};
export default CustomRenderComponent;
