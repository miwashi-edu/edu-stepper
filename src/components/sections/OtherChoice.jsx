import styles from "./sections.module.css";

const OtherChoice = ({ selected, local, setSelected, setLocal, updateData }) => {
    const isCustom = !["", null].includes(local.budget) && ![
        "low", "medium", "high" // optionally hardcode known budget types here
    ].includes(local.budget);

    return (
        <div className={styles.listItem}>
            <input
                type="radio"
                name="budget"
                value="__custom__"
                checked={!isCustom ? false : selected === "__custom__"}
                onChange={() => {
                    setSelected("__custom__");
                    updateData('budget', { ...local, state: 'success' });
                }}
            />
            <label>Other:</label>
            <input
                type="text"
                value={isCustom ? local.budget : ''}
                onChange={(e) => {
                    const value = e.target.value;
                    const updated = { ...local, budget: value, state: 'success' };
                    setLocal(updated);
                    updateData('budget', updated);
                    setSelected("__custom__");
                }}
                className={styles.customInput}
            />
        </div>
    );
};

export default OtherChoice;
