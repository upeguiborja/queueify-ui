import React from "react";
import Card from "@material-ui/core/Card";
import { Message } from "@material-ui/icons";

import "./message.component.scss";

type Props = {
  message?: string;
};

export const MessageComponent: React.FunctionComponent<Props> = (
  props: Props
) => {
  return (
    <Card className="message-component">
      <div className="content-message">
        <Message color="primary" className="icon-message"></Message>
        <div className="text-message">{props.message}</div>
      </div>
    </Card>
  );
};
