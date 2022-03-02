import styled from "styled-components";

export const GridLayoutContainer = styled.main`
  height: ${({ height }) => height || "100%"};
  display: grid;
  grid-template-columns: ${({ columns }) => columns || `11rem 12fr`};
  grid-template-rows: ${({ rows }) => rows || `1fr`};
  overflow: ${({ overflow }) => overflow || `auto`};
  gap: ${({ gap }) => `${gap || 0}px`};
`;
