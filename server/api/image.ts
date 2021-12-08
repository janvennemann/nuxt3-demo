import snoowrap from 'snoowrap'

const r = new snoowrap({
  userAgent: 'node:nuxt3-example:1.0.0 (by /u/Nyu)',
 // https://not-an-aardvark.github.io/reddit-oauth-helper/
 accessToken: process.env.ACCESS_TOKEN
}) as any

export default async (req, res) => {
  const posts = await r.getSubreddit('pics').getHot({ show: 'all' });
  const post = posts[Math.floor(Math.random() * posts.length)]
  const author = await post.author.fetch()
  return {
    title: post.title,
    image: post.url,
    score: post.score,
    author: {
      name: author.name,
      icon: author.icon_img
    }
  }
}
