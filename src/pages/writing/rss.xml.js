import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const writing = await getCollection('writing');
  return rss({
    title: "Pilosophos' Circle (Writing)",
    description: 'Writing by Pilosophos on whatever strikes his fancy.',
    site: context.site,
    items: writing
      .filter(post => !post.data.tags.includes('unpublished') && (post.data.published !== undefined))
      .map(post => ({
        title: post.data.title,
        description: post.data.description,
        link: `/writing/${post.id}`,
        pubDate: post.data.published,
      })),
  });
}