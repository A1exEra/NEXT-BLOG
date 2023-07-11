import { styled, css } from 'styled-components';
import { useContext } from 'react';
import NotificationContext from '@/store/notificationContext';
import ReactDOM from 'react-dom';
const Notification = (props: {
  title: string;
  message: string;
  status: string;
}) => {
  const { title, message, status } = props;
  const notificationCtx = useContext(NotificationContext);

  return ReactDOM.createPortal(
    <StyledNotification
      status={status}
      onClick={notificationCtx!.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </StyledNotification>,
    document.getElementById('notifications') as Element
  );
};

const StyledNotification = styled.div<{ status: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey100};
  background-color: ${({ theme }) => theme.colors.grey800};
  padding: 0 ${({ theme }) => theme.sizes.size8};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  position: fixed;
  height: 5rem;
  bottom: 0;
  width: 100%;
  left: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  h2 {
    font-size: ${({ theme }) => theme.sizes.size6};
    margin: 0;
  }

  p {
    margin: 0;
  }

  ${({ status }) =>
    status === 'success' &&
    css`
      background-color: ${({ theme }) => theme.colors.success500};
      color: ${({ theme }) => theme.colors.grey800};
    `}

  ${({ status }) =>
    status === 'error' &&
    css`
      background-color: ${({ theme }) => theme.colors.error500};
    `}
      
      ${({ status }) =>
    status === 'pending' &&
    css`
      background-color: ${({ theme }) => theme.colors.primary300};
    `}

  @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem);
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
`;

export default Notification;
