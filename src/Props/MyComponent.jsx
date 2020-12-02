import React from 'react';
import ComponentWithProps from './ComponentWithProps';

const MyComponent = () => {
    return (
        <>
            <ComponentWithProps
                header="Cyberpunk 2077"
                content="SciFi"
                number="27.99"
                nonexistent="-"
            />
        </>
    )
}

export default MyComponent;
