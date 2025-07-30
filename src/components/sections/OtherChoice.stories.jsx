import React, { useState } from "react";
import OtherChoice from "./OtherChoice";

export default {
    title: "Sections/OtherChoice",
    component: OtherChoice,
};

export const Default = () => {
    const [selected, setSelected] = useState("__custom__");
    const [local, setLocal] = useState({ budget: "custom value", state: "init" });

    const updateData = (key, updated) => {
        console.log(`updateData(${key}):`, updated);
    };

    return (
        <OtherChoice
            selected={selected}
            setSelected={setSelected}
            local={local}
            setLocal={setLocal}
            updateData={updateData}
        />
    );
};
