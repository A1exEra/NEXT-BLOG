import { styled } from 'styled-components';
import Image from 'next/image';
const Hero = () => {
  return (
    <StyledHero>
      <div className="image">
        <Image
          src="/images/site/sandro.jpg"
          width={300}
          height={300}
          alt="an image of me"
        />
      </div>
      <h1>Hey, I'm Sandro</h1>
      <p>
        Embark on a daring web development escapade with me, where coding
        mischief meets thrilling innovation!
      </p>
    </StyledHero>
  );
};
const StyledHero = styled.section`
  text-align: center;
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.grey900},
    ${({ theme }) => theme.colors.grey800}
  );
  padding: ${({ theme }) => theme.sizes.size8} 0;
  .image {
    width: 300px;
    height: 300px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.grey700};
    margin: auto;
  }

  .image img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }

  h1 {
    font-size: ${({ theme }) => theme.sizes.size16};
    margin: ${({ theme }) => theme.sizes.size4} 0;
    color: ${({ theme }) => theme.colors.grey300};
  }

  p {
    font-size: ${({ theme }) => theme.sizes.size6};
    color: ${({ theme }) => theme.colors.grey200};
    width: 90%;
    max-width: 40rem;
    margin: auto;
  }
`;
export default Hero;
