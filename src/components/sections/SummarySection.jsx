const SummarySection = ({ data }) => {
    return (
        <div>
            <label>Summary</label>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default SummarySection;
