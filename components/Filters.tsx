import React from 'react';
import { useTranslation } from '../i18n';

const ApplyPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">{t('applyPage.title')}</h1>
      <p className="text-lg text-gray-400">
        {t('applyPage.description')}
      </p>
    </div>
  );
};

export default ApplyPage;
