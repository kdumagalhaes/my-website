import styled from 'styled-components';

export const ContactFormTag = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 10px;
    font-weight: 900;
  }

  input {
    width: 450px;
    height: 60px;
    border-radius: 5px;
    border: 1px solid var(--lighter-blue);
    padding-left: 20px;
    color: var(--light-gray);
    margin-bottom: 20px;

    &:focus {
      border: 1px solid var(--primary-blue);
    }
  }

  .message {
    height: 120px;
  }
`;
