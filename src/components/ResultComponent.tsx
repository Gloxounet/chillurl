import { ShortUrl } from "@prisma/client";
import { ChangeEvent, useState } from "react";
import styles from "./ResultComponent.module.css";

const ResultComponent = () => {
	const [input, setInput] = useState("");
	const [res, setRes] = useState("");

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		let value = event.currentTarget.value;
		setInput(value);
	}

	const handleClick = async () => {
		let url = input;

		const data: ShortUrl = await (
			await fetch("/api/set-url?url=" + url)
		).json();

		const slug = data.slug;

		setRes(slug);
	};

	return (
		<>
			<div className={styles.display}>
				<input onChange={handleInputChange} placeholder="https://google.fr" />
				<button onClick={handleClick}>Click me</button>
			</div>
			<p>{res}</p>
		</>
	);
};

export default ResultComponent;
