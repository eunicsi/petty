import React, { InputHTMLAttributes, memo, useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
	autofocus?: boolean;
}

const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = "text",
		placeholder,
		...otherProps
	} = props;

	useEffect(() => {}, []);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={classNames(cls.Input, {}, [className])}>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChangeHandler}
				{...otherProps}
			/>
		</div>
	);
});

export default Input;
