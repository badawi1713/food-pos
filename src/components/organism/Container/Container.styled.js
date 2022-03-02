import styled from "styled-components";
import { colors, fontSizes } from "utils/styles/base";

export const ContainerBox = styled.section`
  width: 100%;
  font-size: ${fontSizes.text_md};
  padding: ${({ padding }) => `${padding || 0}px`};
  padding-top: ${({ paddingTop }) => `${paddingTop || 0}px`};
  padding-right: ${({ paddingRight }) => `${paddingRight || 0}px`};
  padding-bottom: ${({ paddingBottom }) => `${paddingBottom || 0}px`};
  padding-left: ${({ paddingLeft }) => `${paddingLeft || 0}px`};
  margin: ${({ margin }) => `${margin || 0}px`};
  margin-top: ${({ marginTop }) => `${marginTop || 0}px`};
  margin-right: ${({ marginRight }) => `${marginRight || 0}px`};
  margin-bottom: ${({ marginBottom }) => `${marginBottom || 0}px`};
  margin-left: ${({ marginLeft }) => `${marginLeft || 0}px`};
  background-color: ${({ variant }) =>
    variant === "primary"
      ? colors.background_dark_primary
      : variant === "secondary"
      ? colors.background_dark_secondary
      : variant === "default"
      ? colors.background_dark_primary
      : colors.background_dark_primary};
`;
