import React from "react";
import { Meta } from "@storybook/react";
import {Button} from "./button";

export default {
  title: "Button",
  component: Button,
} as Meta<typeof Button>;

const buttonSizes = ["sm", "md", "lg"] as const;
const buttonContent = "Click"
export function Default() {
  return <Button>{buttonContent}</Button>;
}

export function Disabled() {
  return <Button disabled>{buttonContent}</Button>;
}

export function WithOnClick() {
  return <Button onClick={() => alert("Clicked!")}>{buttonContent}</Button>;
}

export function WithSize() {
  return (
    <div>
      {buttonSizes.map((size) => (
        <Button key={size} size={size}>
          {size}
        </Button>
      ))}
    </div>
  );
}

export function WithClassName() {
  return (
    <Button className="CustomStyling" size="lg">
      I'm Styled
    </Button>
  );
}

export function WithTransparent() {
  return <Button transparent>I'm Transparent</Button>;
}