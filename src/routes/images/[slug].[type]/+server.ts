import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

export const prerender = true;

export const GET: RequestHandler = async ({ params }) => {
	if (params.type == "pdf") {
		const filePath = path.resolve(`src/images/${params.slug}.${params.type}`);
		const fileContent = fs.readFileSync(filePath);
		return new Response(await fileContent, {
			headers: {
				'Content-Type': 'application/pdf',
			}
		});

	} else {
		try {
			const image = sharp(`src/images/${params.slug}.${params.type}`);

			console.log(`[info] processing image src/images/${params.slug}.${params.type}`);

			if (image) {
				return new Response(await image.toBuffer(), {
					headers: { 'Content-Type': `image/${(await image.metadata()).format}` }
				});
			}
			throw error(500, 'image could not be opened properly');
		} catch {
			throw error(404, 'not found');
		}
	}

};
