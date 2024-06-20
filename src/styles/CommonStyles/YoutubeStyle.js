import styled from 'styled-components';

export const YoutubeSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.medium};
  overflow: hidden;
`;
export const YoutubeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const YoutubeVideoList = styled.div`
  display: flex;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  gap: ${({ theme }) => theme.spacing.small};
  height: 100%;
`;

export const YoutubeVideo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => theme.spacing.small};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 220px;
`;

export const YoutubeTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontsize.small};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const YoutubeThumbnail = styled.img`
  margin-top: ${({ theme }) => theme.spacing.small};
  width: 100%;
`;

export const WatchVideo = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

export const VideoTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;

  &:disabled {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: not-allowed;
  }
`;
