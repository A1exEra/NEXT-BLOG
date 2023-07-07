import Logo from './Logo';
import Link from 'next/link';
import { styled } from 'styled-components';
const MainNavigation = () => {
  return (
    <StyledMainNav>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </StyledMainNav>
  );
};
const StyledMainNav = styled.div`
  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.grey900};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  ul {
    list-style: none;
    display: flex;
    align-items: baseline;
    margin: 0;
    padding: 0;
    li {
      margin: 0 ${({ theme }) => theme.sizes.size4};
    }
  }
  a {
    color: ${({ theme }) => theme.colors.grey100};
    font-size: ${({ theme }) => theme.sizes.size4};
  }
  a:hover,
  a:active,
  a.active {
    color: ${({ theme }) => theme.colors.grey200};
  }
  @media (min-width: 768px) {
    ul {
      gap: 0.5rem;
    }
    a {
      font-size: ${({ theme }) => theme.sizes.size5};
    }
  }
`;
export default MainNavigation;
