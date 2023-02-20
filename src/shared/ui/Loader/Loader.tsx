import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames(cls.loader, {}, [className])}>
            <div className={cls.center}>
                <div className={cls.ring}></div>
                <span>загрузка...</span>
            </div>
        </div>
    );
};

export default Loader;