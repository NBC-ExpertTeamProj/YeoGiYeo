// src/styles/ResultPageStyles/ResultPageStyles.jsx
import styled from 'styled-components';

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.medium};
  cursor: pointer;
  > h1 {
    font-size: ${({ theme }) => theme.fontsize.large};
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.extraBold};
    padding: ${({ theme }) => theme.spacing.small};
  }

  > p {
    font-size: ${({ theme }) => theme.fontsize.medium};
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.bold};
    padding: ${({ theme }) => theme.spacing.small};
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-weight: bold;
`;

export const FoodImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 600px;
  height: 600px;
  object-fit: cover;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const RandomSuggestionContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

export const ShareContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
  text-align: center;

  > p {
    font-size: ${({ theme }) => theme.fontsize.medium};
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.bold};
    padding: ${({ theme }) => theme.spacing.small};
  }
`;

export const ShareTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const ResultP = styled.p`
  font-size: ${({ theme }) => theme.fontsize.medium};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.extraBold};
`;

export const ShareButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  margin: ${({ theme }) => theme.spacing.small};
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const ShareImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const MapContainer = styled.div`
  max-width: 1000px;
  margin: ${({ theme }) => theme.spacing.medium} auto; /* Center horizontally */
  margin-bottom: ${({ theme }) => theme.spacing.extraLarge};

  > p {
    font-size: ${({ theme }) => theme.fontsize.medium};
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.bold};
    padding: ${({ theme }) => theme.spacing.small};
  }
`;

export const SuggestionButton = styled.button`
  font-size: ${({ theme }) => theme.fontsize.medium};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  width: 600px;

  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  font-family: ${({ theme }) => theme.fonts.bold};
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBlueFocus};
    transform: translateY(-3px);
  }
`;

export const RetryButton = styled.button`
  font-size: ${({ theme }) => theme.fontsize.medium};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  width: 600px;

  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  font-family: ${({ theme }) => theme.fonts.bold};
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.error};
    transform: translateY(-3px);
  }
`;
