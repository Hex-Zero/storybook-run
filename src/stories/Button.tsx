import React from "react";
import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
type ButtonFormat = "primary" | "secondary" | "tertiary";

enum ButtonSize {
  Small = 100,
  Medium = 200,
}

type example = Record<ButtonSize, ButtonFormat[]>;

const convertIntoSizeObject = (): example => {
  const ButtonState: any = {};
  for (let size in ButtonSize) {
    console.log(size);

    if (Object.prototype.toString.call(size) === "[object String]") {
      ButtonState[size] = [];
    }
  }
  return ButtonState;
};

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  // console.log(convertIntoSizeObject());

  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
