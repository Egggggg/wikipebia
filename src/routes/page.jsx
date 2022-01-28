import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helemt } from "react-helmet";
import { promises } from "fs";

export default async function Page() {
	const [slug, setSlug] = useState("");
	const paramSlug = useParams().slug;

	useEffect(() => {
		setSlug(paramSlug);
	}, [setSlug, paramSlug]);

	const exists = !(await promises.access(`../pages/`));
}
