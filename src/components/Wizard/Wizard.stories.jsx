import React from 'react';
import Wizard from "./Wizard.jsx";
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Viewer from "./Viewer.jsx";

export default {
    title: "Wizard",
    component: Wizard,
}

export const Default = {
    render: () =>
        <Wizard>
            <Step1 />
            <Step2 />
            <Viewer />
        </Wizard>
}