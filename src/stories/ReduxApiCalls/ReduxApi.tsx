import * as React from "react";
import { Button } from "../Button";

export interface IApiCallProps {}

export function ApiCall(props: IApiCallProps) {
  const handleOnClick = () => {
    console.log("Button clicked");
  };
  return <Button onClick={handleOnClick} label={"ApiCall"} />;
}
