import styled from 'styled-components';

export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.red};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;

  &.hovered {
    width: 56px;
    height: 56px;
    border: 4px solid ${({ theme }) => theme.red};
  }
  &.locked {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${({ theme }) => theme.red};
    top: ${({ theme }) => theme.top} !important;
    left: ${({ theme }) => theme.left} !important;
  }

  &.pointer {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${({ theme }) => theme.red};
  }

  &.nav-open {
    background: ${({ theme }) => theme.light};
    border: 4px solid ${({ theme }) => theme.light};
  }
`;
