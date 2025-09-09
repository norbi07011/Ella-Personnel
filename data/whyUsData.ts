// FIX: Import React to enable JSX syntax and resolve parsing errors.
import React from 'react';

// Icons for WhyUsCard, converted to React.createElement to avoid JSX parsing issues in .ts file.
const NetworkIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, 
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 8v4m0 4h.01M4.828 4.828a1.5 1.5 0 012.122 0L12 10.879l5.05-5.051a1.5 1.5 0 112.122 2.122L14.121 12l5.05 5.05a1.5 1.5 0 11-2.122 2.122L12 14.121l-5.05 5.05a1.5 1.5 0 01-2.122-2.122L9.879 12 4.828 6.95A1.5 1.5 0 014.828 4.828z" })
);
const ShieldCheckIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, 
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.955a11.955 11.955 0 0118-8.016z" })
);
const UserCheckIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, 
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" })
);
const GitMergeIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, 
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M18 12a3 3 0 11-6 0 3 3 0 016 0zm-6 0v6m-3-3a3 3 0 100-6 3 3 0 000 6z" })
);
const LifeBuoyIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, 
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" })
);
const HeartHandshakeIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, 
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" }),
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 11l-3 3-3-3" })
);

export const getWhyUsData = (t: (key: string) => string) => [
    {
        title: t('whyUsData.d1.title'),
        description: t('whyUsData.d1.description'),
        icon: React.createElement(NetworkIcon),
        image: 'https://images.unsplash.com/photo-1534125343431-705a383b6b5d?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: t('whyUsData.d2.title'),
        description: t('whyUsData.d2.description'),
        icon: React.createElement(ShieldCheckIcon),
        image: 'https://images.unsplash.com/photo-1560518883-ce09059ee445?q=80&w=1934&auto=format&fit=crop'
    },
    {
        title: t('whyUsData.d3.title'),
        description: t('whyUsData.d3.description'),
        icon: React.createElement(UserCheckIcon),
        image: 'https://images.unsplash.com/photo-1573496773905-f5b17e76b254?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: t('whyUsData.d4.title'),
        description: t('whyUsData.d4.description'),
        icon: React.createElement(GitMergeIcon),
        image: 'https://images.unsplash.com/photo-1618335829737-25e4c73f952?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: t('whyUsData.d5.title'),
        description: t('whyUsData.d5.description'),
        icon: React.createElement(LifeBuoyIcon),
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: t('whyUsData.d6.title'),
        description: t('whyUsData.d6.description'),
        icon: React.createElement(HeartHandshakeIcon),
        image: 'https://images.unsplash.com/photo-1600880292210-859bb1fed5b1?q=80&w=2070&auto=format&fit=crop'
    }
];
