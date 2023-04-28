import React from "react";

const Button = (props) => {
  const { className, children, ...rest } = props;
  const classes = `cursor-pointer flex justify-center items-center rounded-sm py-2 text-center ease-in duration-150 ${className}`;

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Button;
