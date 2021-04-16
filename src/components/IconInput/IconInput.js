import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderWidth: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderWidth: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];
  return (
    <Wrapper>
      <IconWrapper style={{ "--icon-size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <TextInput
        {...delegated}
        style={{
          "--height": styles.height + "px",
          "--font-size": styles.fontSize / 16 + "rem",
          "--border-width": styles.borderWidth + "px",
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--icon-size);
`;

const TextInput = styled.input`
  border-bottom: 1px solid ${COLORS.black};
  display: inline-block;
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.balck};
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  height: var(--height);
  padding-left: var(--height);
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
