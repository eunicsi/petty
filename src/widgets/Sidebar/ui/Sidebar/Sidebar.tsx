import { t } from 'i18next';
import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import LangSwitcher from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

const Sidebar: FC<SidebarProps> = (props) => {
	const [collapsed, setCollapsed] = useState<boolean>(true);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	const {
		className,
	} = props;

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<button
				type="button"
				data-testid="sidebar-toggle"
				onClick={onToggle}
			>
				{t('toggle')}
			</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};

export default Sidebar;
