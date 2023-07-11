import { styled } from 'styled-components';
const Logo = () => {
  return <StyledLogo>Dev/Dominat!on</StyledLogo>;
};
const StyledLogo = styled.div`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.sizes.size5};
  font-weight: bold;
  font-family: 'Oswald', sans-serif;
  color: ${({ theme }) => theme.colors.grey50};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.size8};
  }
`;
export default Logo;
