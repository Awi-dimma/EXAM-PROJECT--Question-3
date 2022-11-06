import React from "react";
const Input = React.forwardRef((props, ref) => {
  const { field = "input", ...others } = props;
  
  return (
    <div className="input__group">
      <label>{props.label}</label>
        <input {...others} ref={ref}></input>
    </div>
  );
});
export default Input;


