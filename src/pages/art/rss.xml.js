import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getContainerRenderer as getMDXRenderer } from "@astrojs/mdx";
import { loadRenderers } from "astro:container";
import { getImage } from "astro:assets";
import { getCollection, render } from "astro:content";
import rss from "@astrojs/rss";

/* Rather bonkers RSS generator from https://blog.damato.design/posts/astro-rss-mdx/ */

export async function GET(context) {
  // Retrieve the collection and filter it the same way as the art index page
  const art = (
    await getCollection('art'))
      .filter(piece => !piece.data.tags?.includes('notmine') && !piece.data.tags?.includes('notfeatured'))
      .toSorted((a, b) => b.data.date?.getTime() - a.data.date?.getTime()
  );

  // Initialize renderers to render Markdown
  const renderers = await loadRenderers([getMDXRenderer()]);
  const container = await AstroContainer.create({ renderers });

  // Add the necessary data to the collection
  const items = [];
  for (const post of art) {
    // Get the actual URL of the art
    const url = new URL(
      (await getImage({ src: post.data.cover, format: "png" })).src,
      context.site,
    ).href;

    // Render the description to an HTML string
    const { Content } = await render(post);
    const description = await container.renderToString(Content);

    items.push({
      data: post.data,
      id: post.id,
      url: url,
      description: description,
    });
  }

  // This is the actual RSS content generator
  return rss({
    title: "Pilosophos' Circle (Art)",
    description: 'Art by Pilosophos, artist born and raised on the internet.',
    site: context.site,
    trailingSlash: false,
    items: items
      .map(post => {
        return {
          title: post.data.title,
          description: `"${post.data.title}" by Pilosophos`,
          link: `/art/${post.id}`,
          pubDate: post.data.date,
          content: `<img src="${post.url}"/>` + post.description
        }
      }),
  });
}