import { styled } from 'styled-components';
import PostsGrid from './PostsGrid';
import { POST } from '@/helpers/types';
const AllPosts = (props: { posts: POST[] }) => {
  return (
    <StyledPosts>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </StyledPosts>
  );
};

const StyledPosts = styled.section`
  width: 90%;
  max-width: 60rem;
  margin: ${({ theme }) => theme.sizes.size8} auto;
  h1 {
    font-size: ${({ theme }) => theme.sizes.size8};
    color: ${({ theme }) => theme.colors.grey800};
    text-align: center;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: ${({ theme }) => theme.sizes.size16};
    }
  }
`;
export default AllPosts;
