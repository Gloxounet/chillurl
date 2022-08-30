import { NextApiResponse, NextApiRequest } from "next";

import { prisma } from "../../db/client";

var uniqueSlug = require("unique-slug");

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const url = req.query["url"];

	if (!url || typeof url !== "string") {
		res.status(404).json({ message: "Please use that with a correct url" });
		return;
	}

	let data = await prisma.shortUrl.findFirst({
		where: {
			url: {
				equals: url,
			},
		},
	});

	if (!data) {
		const newslug: string = uniqueSlug();
		data = await prisma.shortUrl.create({
			data: {
				url: url,
				slug: newslug,
			},
		});
	}

	return res.json(data);
};
