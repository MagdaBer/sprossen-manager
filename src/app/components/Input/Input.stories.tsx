import React from "react";
import Input from "./Input";

export default {
    title: "Component/Input",
    component: Input,
};
export const InputField = ():JSX.Element => <Input type="text" value="name" placeholder="name" onChange={()=>console.log("change")}/>;