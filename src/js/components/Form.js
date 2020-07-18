import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("it works!");

  const changeValue = (event) => setValue(event.target.value);
  return <input type="text" value={value} onChange={changeValue} />;
};

export default Form;
