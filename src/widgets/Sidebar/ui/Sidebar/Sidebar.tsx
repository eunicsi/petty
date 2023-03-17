import { t } from "i18next";
import { FC, memo, useMemo, useState } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import LangSwitcher from "widgets/LangSwitcher/LangSwitcher";
import { SidebarItemsList } from "widgets/Sidebar/model/items";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import SidebarItem from "../SidebarItem/SidebarItem";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState<boolean>(true);

	const onToggle = () => {
		setCollapsed((prev) => { return !prev; });
	};

	const itemsList = useMemo(() => {
		return SidebarItemsList.map((item) => {
			return (
				<SidebarItem
					item={item}
					collapsed={collapsed}
					key={item.path}
				/>
			);
		});
	}, [collapsed]);

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
				{itemsList}
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
});
