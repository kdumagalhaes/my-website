import styled from 'styled-components';

export const ContactFormTag = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 10px;
    font-weight: 900;
  }

  input,
  textarea {
    width: 450px;
    border-radius: 5px;
    border: 1px solid var(--lighter-blue);
    color: var(--light-gray);
    margin-bottom: 20px;
    padding: 20px;
    height: 120px;

    @media (max-width: 375px) {
      width: 100%;
      border: 1px solid var(--primary-blue);
    }
  }

  input {
    height: 60px;
    padding-left: 20px;

    &:focus {
      border: 1px solid var(--primary-blue);
    }
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`;
