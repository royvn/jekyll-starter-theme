import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  console.log('checkpoint getPostBySlug');

  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)

  console.log('fullPath')
  console.log(fullPath)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const items = {}
  
  // console.log('realSlug');
  // console.log(realSlug);

  // console.log('data.slug');
  // console.log(data.slug);

  console.log('fields');
  console.log(fields);

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  console.log('items')
  console.log(items)

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  console.log('checkpoint getAllPosts slugs');
  // console.log(slugs);
  const posts = slugs.map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}