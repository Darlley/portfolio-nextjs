import cors from 'cors';
import { Client } from '@notionhq/client';

const corsMiddleware = cors({
    origin: 'http://darlley.dev/',
    methods: ['GET', 'POST']
})

function runMiddleware(req, res, fn){
    return new Promise((resolve, reject) => {
        ReferenceError(req, res, (result) => {
            if(result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

const notion_secret = process.env.NOTION_TOKEN;
const notion_database = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: notion_secret });

export default async function handler(req, res) {
    await runMiddleware(req, res, corsMiddleware)

    const slug = req.query.slug;

    console.log('api slug', slug)

    if (!slug) {
        return res.status(400).json({ error: 'Slug missing' });
    }

    try {
        const result = await notion.databases.query({
            database_id: notion_database,
            filter: {
                property: 'Slug',
                title: {
                equals: slug,
                },
            },
        });

        if (result.results.length === 0) {
            return res.status(404).json({ error: 'Article not found' });
        }

        const article = result.results[0];

        const blockResponse = await notion.blocks.children.list({
            block_id: article.id,
        });
        
        const content = blockResponse.results
        .filter((block) => block.type === 'paragraph')
        .map((block) => block.paragraph.rich_text.map((block) => block.text.content)).join('\n\n')

        console.log(content)
        
        const articleData = {
            id: article.id,
            thumbnail: article.cover && article.cover.external.url || '',
            authors: article.properties.Authors.people[0],
            title: article.properties.Page.title[0].plain_text || '',
            published: article.properties.Published.checkbox,
            date: article.properties.Date.date.start,
            url: article.url || '',
            content: content,
        };

        return res.status(200).json(articleData);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}