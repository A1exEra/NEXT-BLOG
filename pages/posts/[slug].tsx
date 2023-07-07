import PostContent from '@/components/posts/postDetail/PostContent';
import { getPostData, getPostsFiles } from '@/helpers/posts-util';
const PostDetaiPage = (props: any) => {
  return <PostContent post={props.post} />;
};

export const getStaticProps = (ctx: { params: any }) => {
  const { params } = ctx;
  const { slug } = params;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};
export default PostDetaiPage;
