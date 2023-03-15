import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { memo, useState } from 'react';

const MainPage = memo(() => {
    const { t } = useTranslation();

    const [value, setValue] = useState('');
    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            <BugButton />
            {t('Главная')}
        </div>
    );
});

export default MainPage;
