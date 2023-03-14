import { t } from "i18next";
import { FC, useState } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import Button, { ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import LangSwitcher from "widgets/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
	className?: string;
}

const Sidebar: FC<SidebarProps> = (props) => {
	const [collapsed, setCollapsed] = useState<boolean>(true);

	const onToggle = () => {
		setCollapsed((prev) => { return !prev; });
	};

	const { className } = props;

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<Button
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={cls.collapsedBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				square
				size={ButtonSize.L}
			>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={cls.items}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.main}
					className={cls.item}
				>
					<MainIcon className={cls.icon} />
					<span className={cls.link}>
						{t("main")}
					</span>
				</AppLink>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.about}
					className={cls.item}
				>
					<AboutIcon className={cls.icon} />
					<span className={cls.link}>
						{t("about")}
					</span>
				</AppLink>
			</div>

			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher
					className={cls.lang}
					short={collapsed}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
