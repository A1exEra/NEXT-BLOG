import { styled } from 'styled-components';
import PostHeader from './PostHeader';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Image from 'next/image';
// import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
// import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
// import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
// SyntaxHighlighter.registerLanguage('js', js);
// SyntaxHighlighter.registerLanguage('css', css);
const PostContent = (props: any) => {
  const imagePath = `/images/posts/${props.post.slug}/${props.post.image}`;

  const customRenderers = {
    p(paragraph: { children?: any; node?: any }) {
      const { node } = paragraph;
      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        return (
          <div className="image">
            <Image
              src={`/images/posts/${props.post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    // code(code: { language: any; value: any }) {
    //   const { language, value } = code;
    //   return (
    //     <SyntaxHighlighter
    //       style={atomDark}
    //       language={language}
    //       children={value}
    //     />
    //   );
    // },
    // code({ node, inline, className, children, ...props }) {
    //   const match = /language-(\w+)/.exec(className || '');
    //   return !inline && match ? (
    //     <SyntaxHighlighter
    //       children={String(children).replace(/\n$/, '')}
    //       style={atomDark}
    //       language={match[1]}
    //       PreTag="div"
    //       {...props}
    //     />
    //   ) : (
    //     <code className={className} {...props}>
    //       {children}
    //     </code>
    //   );
    // },
  };

  return (
    <StyledContent>
      <PostHeader title={props.post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>
        {props.post.content}
      </ReactMarkdown>
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
