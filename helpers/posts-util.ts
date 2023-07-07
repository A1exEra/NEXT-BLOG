import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
const postsDir = path.join(process.cwd(), 'PostsMD');

export const getPostsFiles = () => {
  return fs.readdirSync(postsDir);
};
export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, ''); //removes file extension
  const filePath = path.join(postsDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  return allPosts.sort((a: any, b: any) => (a.date > b.date ? -1 : 1));
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  return allPosts.filter((post: any) => post.isFeatured);
};
