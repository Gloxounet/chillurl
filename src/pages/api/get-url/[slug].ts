import { NextApiResponse, NextApiRequest } from "next";

import { prisma } from "../../../db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const slug = req.query["slug"];

	if (!slug || typeof slug !== "string") {
		res.status(404).json({ message: "Please use that with a correct slug" });

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
		res.status(404).json({ message: "Slug not found" });

		return;
	}

	return res.json(data);
};
