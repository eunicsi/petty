import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

const Loader = ({ className }: LoaderProps) => {

    return (
        <div className={classNames(cls.loader, {}, [className])}>
            <div className={cls.spinner}>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;