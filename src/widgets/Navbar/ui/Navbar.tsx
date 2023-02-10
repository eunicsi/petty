import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.PRIMARY} to={'/'} className={cls.mainLink}>Main</AppLink>
				<AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>About</AppLink>
			</div>
		</div>
	);
};

export default Navbar;