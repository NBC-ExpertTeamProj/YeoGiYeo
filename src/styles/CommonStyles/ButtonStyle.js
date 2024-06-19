import styled from 'styled-components';

export const PositiveButton = styled.button`
  font-size: ${({ theme }) => theme.fontsize.medium};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  font-family: ${({ theme }) => theme.fonts.bold};
  &:hover {
    color: ${({ theme }) => theme.colors.darkBlueFocus};
  }
`;

export const NegativeButton = styled.button`
  font-size: ${({ theme }) => theme.fontsize.medium};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray};
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  font-family: ${({ theme }) => theme.fonts.bold};
  &:hover {
    color: ${({ theme }) => theme.colors.grayFocus};
  }
`;
