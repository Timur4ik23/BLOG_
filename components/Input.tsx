
import React from "react";

type InputProps = {
  toRegister: string, 
  registerFunction,
  errors,
  children: React.ReactNode,
};

const Input: React.FC<InputProps> = ({
  toRegister,
  registerFunction,
  children,
  errors,
}) => {
  return (
    <>
    <input className='border mt-4' type="text" placeholder={children} {...registerFunction(toRegister)}/>
    <br />
    {errors[toRegister]?.message&&<p>{errors[toRegister]?.message}</p>}
    </>
  );
};

export default Input;
