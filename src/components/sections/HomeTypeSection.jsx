import { useEffect, useState } from 'react';
import {defaultHomeTypes as choices} from './defaults';
import {Section} from "../Section";
const HomeTypeSection = ({ data, updateData }) => {
    const [selected, setSelected] = useState( data?.budget);
    const [local, setLocal] = useState(() => ({
        budget: data?.budget ?? '',
        state: data?.state ?? 'info',
    }));

    useEffect(() => {
        if (!data) {
            updateData('budget', local);
        }
    }, []);

    const handleChange = (value) => {
        const updated = { ...local, budget: value, state: 'success' };
        setLocal(updated);
        updateData('homeType', updated);
    };


    const alert = {
        title: "Add the service fee or specific budget for the proposal",
        alt: "The service fee selected successfully!",
        type:data?.state,
    }

    return (
        <Section
            key="budget-type"
            title='Service Fee'
            alert={alert}
            choices={choices}
            hasOther={true}
            handleChange = {handleChange}
        />
    );
};

export default HomeTypeSection;
