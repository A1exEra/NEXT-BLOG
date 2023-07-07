import { styled } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
const PostItem = (props: any) => {
  const { title, excerpt, image, date, slug } = props.post;
  const linkPath = `/posts/${slug}`;
  const imagePath = `/images/posts/${slug}/${image}`;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <StyledPost>
      <Link href={linkPath}>
        <div className="image">
          <Image
            src={imagePath}
            width={300}
            height={200}
            alt="an image of me"
            layout="responsive"
          />
        </div>
        <div className="content">
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </StyledPost>
  );
};
const StyledPost = styled.li`
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.colors.grey800};
  text-align: center;
  border-radius: 6px;
  a {
    color: ${({ theme }) => theme.colors.grey100};
  }

  .image {
    width: 100%;
    max-height: 20rem;
    border-radius: 6px;
    overflow: hidden;
    img {
      object-fit: cover;
    }
  }
  .content {
    padding: ${({ theme }) => theme.sizes.size4};

    h3 {
      margin: ${({ theme }) => theme.sizes.size2} 0;
      font-size: ${({ theme }) => theme.sizes.size6};
    }

    time {
      font-style: italic;
      color: ${({ theme }) => theme.colors.grey300};
    }

    p {
      line-height: ${({ theme }) => theme.sizes.size6};
    }
  }
`;
export default PostItem;
