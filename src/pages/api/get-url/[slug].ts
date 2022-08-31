import { NextApiResponse, NextApiRequest } from "next";

import { prisma } from "../../../db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const slug = req.query["slug"];

	if (!slug || typeof slug !== "string") {
		res.statusCode = 404;

		res.send(JSON.stringify({ message: "Please use this with a slug" }));

		return;
	}

	const data = await prisma.shortUrl.findFirst({
		where: {
			slug: {
				equals: slug,
			},
		},
	});

	if (!data) {
		res.statusCode = 404;

		res.send(JSON.stringify({ message: "Slug not found in database" }));

		return;
	}

	return res.json(data);
};
