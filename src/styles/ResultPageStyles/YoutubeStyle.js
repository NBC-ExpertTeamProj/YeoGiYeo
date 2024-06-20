import styled from 'styled-components';

export const YoutubeSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.medium};
  overflow: hidden;
  justify-content: center;
  width: 1050px;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.bold};
  overflow-y: auto;
`;

export const YoutubeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  position: relative;
`;
export const YoutubeVideoList = styled.div`
  display: flex;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  gap: ${({ theme }) => theme.spacing.small};
  height: 100%;
  margin: 0 40px;
`;

export const YoutubeVideo = styled.div`
  min-width: 220px;
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => theme.spacing.small};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const YoutubeTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontsize.small};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const YoutubeThumbnail = styled.img`
  margin-top: ${({ theme }) => theme.spacing.small};
  width: 198px;
  height: 111px;
`;

export const WatchVideo = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

export const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: black;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  background: none;
  &.left {
    left: -20px;
  }

  &.right {
    right: -20px;
  }
`;
export const ArrowLeft = styled.text`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-left: 5px solid ${({ theme }) => theme.colors.darkBlue};
  border-bottom: 5px solid ${({ theme }) => theme.colors.darkBlue};
  transform: rotate(45deg);
  transition: background-color 0.3s;
  &:hover {
    border-left: 7px solid ${({ theme }) => theme.colors.darkBlueFocus};
    border-bottom: 7px solid ${({ theme }) => theme.colors.darkBlueFocus};
  }
`;

export const ArrowRight = styled.text`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-left: 5px solid ${({ theme }) => theme.colors.darkBlue};
  border-bottom: 5px solid ${({ theme }) => theme.colors.darkBlue};
  transform: rotate(-135deg);
  transition: background-color 0.3s;
  &:hover {
    border-left: 7px solid ${({ theme }) => theme.colors.darkBlueFocus};
    border-bottom: 7px solid ${({ theme }) => theme.colors.darkBlueFocus};
  }
`;
