import { useState, useEffect } from "react";
import { notification } from "antd";
import axios from "axios";

export const useForm = (validate: any) => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [shouldSubmit, setShouldSubmit] = useState(false);

	const openNotificationWithIcon = () => {
		notification["success"]({
			message: "Success",
			description: "Your message has been sent!",
		});
	};

	const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		setErrors(validate(values));
		// Your url for API
		const url = "https://formspree.io/f/mjvdbnrz";
		console.log("submit")
		if (Object.keys(values).length === 1) {
			console.log("length is right");
			axios
				.post(url, {
					...values,
				})
				.then(() => {
					setShouldSubmit(true);
				});
		}
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && shouldSubmit) {
			console.log("notify")
			setValues("");
			openNotificationWithIcon();
		}
	}, [errors, shouldSubmit]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.persist();
		setValues((values) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
		setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
	};

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
	};
};
