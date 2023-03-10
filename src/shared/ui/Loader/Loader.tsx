import { t } from "i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Loader.module.scss";

interface LoaderProps {
	className?: string;
}

const Loader = ({ className }: LoaderProps) => (
	<div className={classNames(cls.loader, {}, [className])}>
		<div className={cls.center}>
			<div className={cls.ring} />
			<span>{t("загрузка")}</span>
		</div>
	</div>
);

export default Loader;
