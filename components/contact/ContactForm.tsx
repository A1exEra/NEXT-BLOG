import { styled } from 'styled-components';
import { useState, useContext } from 'react';
import NotificationContext from '@/store/notificationContext';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const notificationCtx = useContext(NotificationContext);
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const sendMessageHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    notificationCtx.setNotification({
      title: 'Submitting...',
      message: 'Getting ready to submit your feedback...',
      status: 'pending',
    });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        notificationCtx.setNotification({
          title: 'Error',
          message: 'Error sending to Database...',
          status: 'error',
        });
        return;
      }
      const data = await response.json();
      notificationCtx.setNotification({
        title: 'Success!',
        message: 'Successfully submitted your feedback!',
        status: 'success',
      });
      setFormData({
        email: '',
        name: '',
        message: '',
      });
    } catch (error: any) {
      notificationCtx.setNotification({
        title: 'Error!',
        message: error.message || 'something went wrong...',
        status: 'error',
      });
    }
  };
  return (
    <StyledContact onSubmit={sendMessageHandler}>
      <h1>Leave your feedback!</h1>
      <form action="POST" className="form">
        <div className="controls">
          <div className="control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="control">
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            required></textarea>
        </div>
        <div className="actions">
          <button>Send Feedback</button>
        </div>
      </form>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  margin: ${({ theme }) => theme.sizes.size8} auto;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.grey100};
  width: 90%;
  max-width: 50rem;
  padding: ${({ theme }) => theme.sizes.size4};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  font-size: ${({ theme }) => theme.sizes.size6};
  h1 {
    font-size: ${({ theme }) => theme.sizes.size8};
    margin: ${({ theme }) => theme.sizes.size4} 0;
    text-align: left;
  }

  .form label {
    display: block;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    margin: ${({ theme }) => theme.sizes.size2} 0
      ${({ theme }) => theme.sizes.size1} 0;
  }

  .form input,
  .form textarea {
    font: inherit;
    padding: ${({ theme }) => theme.sizes.size1};
    border-radius: 4px;
    width: 100%;
    border: 1px ${({ theme }) => theme.colors.grey400};
    background-color: ${({ theme }) => theme.colors.grey50};
    resize: none;
  }

  .controls {
    display: flex;
    column-gap: 1rem;
    flex-wrap: wrap;
  }

  .control {
    flex: 1;
    min-width: 10rem;
  }

  .actions {
    margin-top: ${({ theme }) => theme.sizes.size4};
    text-align: right;
  }

  .form button {
    font: inherit;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary700};
    border: 1px solid ${({ theme }) => theme.colors.primary700};
    padding: ${({ theme }) => theme.sizes.size2}
      ${({ theme }) => theme.sizes.size4};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.primary50};
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary500};
      border-color: ${({ theme }) => theme.colors.primary500};
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: ${({ theme }) => theme.sizes.size16};
      text-align: center;
    }
  }
`;
export default ContactForm;
