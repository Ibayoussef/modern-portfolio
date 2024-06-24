import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

const CreativeCursor = () => {
    return (
        <AnimatedCursor
            innerSize={9}
            outerSize={50}
            color='167, 37, 130'
            outerAlpha={0.2}
            innerScale={0.9}
            outerScale={2}
            clickables={[
                'a',
                'li',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}
            innerStyle={{
                background: 'linear-gradient(135deg, rgba(167, 37, 130, 0.5) 0%, rgba(167, 37, 130, 0.8) 100%)',
                borderRadius: '50%',

            }}
            outerStyle={{
                border: '1px solid rgba(167, 37, 130, 0.8)',
                background: 'transparent',
                animation: 'gradient-animation 3s ease infinite',
                backgroundSize: '200% 200%',
            }}
        />
    );
};

export default CreativeCursor;
