import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getContainerRenderer as getMDXRenderer } from "@astrojs/mdx";
import { loadRenderers } from "astro:container";
import { getCollection, render } from "astro:content";
import rss from "@astrojs/rss";

/* Rather bonkers RSS generator from https://blog.damato.design/posts/astro-rss-mdx/ */

export async function GET(context) {
  const writing = await getCollection('writing');

  const renderers = await loadRenderers([getMDXRenderer()]);
  const container = await AstroContainer.create({ renderers });

  const items = [];
  for (const post of writing) {
    const { Content } = await render(post);
    const content = await container.renderToString(Content);
    items.push({ data: post.data, id: post.id, content });
  }

  return rss({
    title: "Pilosophos' Circle (Writing)",
    description: 'Writing by Pilosophos, who is trying to give Shakespeare a run for his money. (This feed is for writing only. For my art RSS feed, subscribe to https://pilosophos.com/art/rss.xml)',
    site: context.site,
    trailingSlash: false,
    stylesheet: '/rss/styles.xsl',
    items: items
      .filter(post => !post.data.tags.includes('unpublished') && (post.data.published !== undefined))
      .map(post => ({
        title: post.data.title,
        description: post.data.description,
        link: `/writing/${post.id}`,
        pubDate: post.data.published,
        categories: post.data.tags,
        customData: post.data.updated && `<lastBuildDate>${post.data.updated.toUTCString()}</lastBuildDate>`,
        content: post.content,
      })),
  });
}