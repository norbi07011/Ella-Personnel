import React from 'react';

const BuildingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-8h1m-1 4h1m-1 4h1M9 3v18m6-18v18" /></svg>;
const CogIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const ClipboardListIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>;


export const getRentServicesData = (t: (key: string) => string) => [
    {
        title: t('rentServicesData.s1.title'),
        description: t('rentServicesData.s1.description'),
        linkText: t('rentServicesData.s1.linkText'),
        icon: <BuildingIcon />,
        image: 'https://images.unsplash.com/photo-1581294078634-a253dba4d5f9?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: t('rentServicesData.s2.title'),
        description: t('rentServicesData.s2.description'),
        linkText: t('rentServicesData.s2.linkText'),
        icon: <CogIcon />,
        image: 'https://images.unsplash.com/photo-1621358339626-4022a404b7f4?q=80&w=1974&auto=format&fit=crop'
    },
    {
        title: t('rentServicesData.s3.title'),
        description: t('rentServicesData.s3.description'),
        linkText: t('rentServicesData.s3.linkText'),
        icon: <ClipboardListIcon />,
        image: 'https://images.unsplash.com/photo-1621996346565-e326b20f5451?q=80&w=1965&auto=format&fit=crop'
    }
];
