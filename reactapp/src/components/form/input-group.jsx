import React from "react";

function InputGroup({title, onChange, name, className}){
    return(
    <React.Fragment>
        <label htmlFor={name} className="font-semibold">{title}</label>
        <input required id={name} className={`w-full rounded-md p-1 ${className}`} onChange={(e) => onChange(e)} name={name} type="text"/>
    </React.Fragment>
    )
}
export default InputGroup;