import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Page } from '@/widgets/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page>
            <BugButton />
            {t('Главная')}
        </Page>
    );
});

export default MainPage;
