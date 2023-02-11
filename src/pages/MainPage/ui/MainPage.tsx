import { useTranslation } from 'react-i18next';
import Loader from 'shared/ui/Loader/Loader';

const MainPage = () => {
	const { t } = useTranslation();

	return (
		<div>
			<Loader />

			{t('Главная страница')}
		</div>
	);
};

export default MainPage;