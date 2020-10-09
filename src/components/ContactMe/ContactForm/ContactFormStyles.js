import styled from 'styled-components';

export const ContactFormTag = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1px;
    color: var(--lighter-blue);
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

    @media (max-width: 411px) {
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

  textarea:focus {
    border: 1px solid var(--primary-blue);
  }

  div {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    height: 800px;
  }

  @media (max-width: 411px) {
    width: 100%;
    height: 800px;
  }

`;
