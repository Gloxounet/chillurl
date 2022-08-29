import { NextApiResponse, NextApiRequest } from "next";
import { ShortUrl } from "@prisma/client";

import { prisma } from "../../../db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const url = req.query["url"];

	if (!url || typeof url !== "string") {
		res.status(404).json({ message: "Please use that with a correct url" });

		return;
	}

	const data = await prisma.shortUrl.findFirst({
		where: {
			url: {
				equals: url,
			},
		},
	});

	if (data) {
		res.status(404).json({ message: "Url already in database" });

		return;
	}

	const new_data: ShortUrl = await prisma.shortUrl.create({
		data: {
			url: url,
			slug: "test",
		},
	});

	return res.status(200).json(new_data);
};
