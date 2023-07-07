import { styled } from 'styled-components';
import PostItem from './PostItem';
const PostsGrid = (props: any) => {
  return (
    <StyledGrid>
      {props.posts.map((post: any) => (
        <PostItem key={post.id} post={post} />
      ))}
    </StyledGrid>
  );
};
const StyledGrid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1.5rem;
  align-content: center;
`;
export default PostsGrid;
