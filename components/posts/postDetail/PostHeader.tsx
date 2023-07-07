import { styled } from 'styled-components';
import Image from 'next/image';
const PostHeader = (props: { title: string; image: string }) => {
  const { title, image } = props;

  return (
    <StyleHeader>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </StyleHeader>
  );
};

const StyleHeader = styled.header`
  padding-bottom: ${({ theme }) => theme.sizes.size8};
  border-bottom: 8px solid ${({ theme }) => theme.colors.primary100};
  margin: ${({ theme }) => theme.sizes.size4} 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  h1 {
    font-size: ${({ theme }) => theme.sizes.size8};
    color: ${({ theme }) => theme.colors.primary500};
    margin: 0;
    line-height: initial;
    text-align: center;
  }

  img {
    object-fit: cover;
    width: 200px;
    height: 120px;
  }

  @media (min-width: 768px) {
    margin: ${({ theme }) => theme.sizes.size8} 0;
    flex-direction: row;
    align-items: flex-end;
    h1 {
      font-size: ${({ theme }) => theme.sizes.size16};
      text-align: left;
    }
  }
`;
export default PostHeader;
