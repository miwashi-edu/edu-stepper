import React, { useState, useEffect } from 'react';

const Viewer = ({ data }) => {
    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default Viewer;
