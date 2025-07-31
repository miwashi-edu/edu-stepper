import React, { useState, useEffect } from 'react';

const Viewer = ({ data }) => {
    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

Viewer.meta = {
    caption: 'Viewer',
    altCaption: 'View for data',
    key: "viewer",
    hidden: false
};

export default Viewer;
