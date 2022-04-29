import React from 'react';

const PositionContext = React.createContext({
    x: 0,
    y: 0,
    z: 0,
    mySetContextFields: () => {}
});

export default PositionContext;
