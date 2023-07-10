import AllPosts from '@/components/posts/AllPosts';
import { getAllPosts } from '@/helpers/posts-util';
import { Head } from 'next/document';
const AllPostPage = (props: any) => {
  return (
    <div>
      <AllPosts posts={props.posts} />
    </div>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1800,
  };
};
export default AllPostPage;
