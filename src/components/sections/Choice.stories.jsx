import React, { useState } from "react";
import Choice from "./Choice";

export default {
    title: "Sections/Choice",
    component: Choice,
};

export const Default = () => {
    const [selected, setSelected] = useState("option1");

    return (
        <div>
            <Choice
                name="example"
                value="option1"
                checked={selected === "option1"}
                onChange={() => setSelected("option1")}
                label="Option 1"
            />
            <Choice
                name="example"
                value="option2"
                checked={selected === "option2"}
                onChange={() => setSelected("option2")}
                label="Option 2"
            />
        </div>
    );
};
