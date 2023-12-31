import { styled } from 'styled-components';
import PostsGrid from '../posts/PostsGrid';

const FeaturedPosts = (props: any) => {
  return (
    <StyledFeaturedPosts>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </StyledFeaturedPosts>
  );
};
const StyledFeaturedPosts = styled.div`
  width: 90%;
  max-width: 80rem;
  margin: ${({ theme }) => theme.sizes.size8} auto;

  h2 {
    font-size: ${({ theme }) => theme.sizes.size8};
    color: ${({ theme }) => theme.colors.grey800};
    text-align: center;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: ${({ theme }) => theme.sizes.size16};
    }
  }
`;
export default FeaturedPosts;
