import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page
            data-testid="MainPage"
        >
            {t('Главная')}
        </Page>
    );
});

export default MainPage;
