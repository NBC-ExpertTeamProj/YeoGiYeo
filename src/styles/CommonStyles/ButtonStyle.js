import styled from 'styled-components';

export const PositiveButton = styled.button`
  font-size: ${({ theme }) => theme.fontsize.medium};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};

  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-family: ${({ theme }) => theme.fonts.bold};
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBlueFocus}; /* Change on hover */
  }
`;

export const NegativeButton = styled.button`
  font-size: ${({ theme }) => theme.fontsize.medium};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};

  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-family: ${({ theme }) => theme.fonts.bold};
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayFocus}; /* Change on hover */
  }
`;
