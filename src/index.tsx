import * as React from "react";
import * as ReactDOM from "react-dom";

export interface HelloProps {
  name: string;
  nick: string;
}

export const HelloMessage = (props: HelloProps) => (
  <div>
    Hello {props.name}, {props.nick} ages!
  </div>
);

ReactDOM.render(
  <HelloMessage name="Taylor" nick="col19" />,
  document.getElementById('hello-example')
);
