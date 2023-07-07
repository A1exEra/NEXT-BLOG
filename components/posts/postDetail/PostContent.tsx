import { styled } from 'styled-components';
import PostHeader from './PostHeader';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
const PostContent = (props: any) => {
  console.log(props);
  const imagePath = `/images/posts/${props.post.slug}/${props.post.image}`;
  return (
    <StyledContent>
      <PostHeader title={props.post.title} image={imagePath} />
      <ReactMarkdown>{props.post.content}</ReactMarkdown>
    </StyledContent>
  );
};

const StyledContent = styled.article`
  width: 95%;
  max-width: 60rem;
  margin: ${({ theme }) => theme.sizes.size8} auto;
  font-size: ${({ theme }) => theme.sizes.size5};
  line-height: ${({ theme }) => theme.sizes.size8};
  background-color: ${({ theme }) => theme.colors.grey100};
  border-radius: 6px;
  padding: ${({ theme }) => theme.sizes.size4};
  a {
    color: ${({ theme }) => theme.colors.primary500};
  }
  p {
    color: ${({ theme }) => theme.colors.grey800};
  }
  .image {
    margin: ${({ theme }) => theme.sizes.size4} auto;
    width: 100%;
    max-width: 600px;
  }

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.sizes.size8};
  }
`;
export default PostContent;
