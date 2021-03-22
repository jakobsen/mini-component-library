import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  large: {
    padding: 4,
    height: 24,
    radius: 8,
  },
  medium: {
    padding: 0,
    height: 12,
    radius: 4,
  },
  small: {
    padding: 0,
    height: 8,
    radius: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  if (!styles) {
    throw new Error(`Unknwon size prop passed to ProgressBar: ${size}`);
  }
  return (
    <Wrapper
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--padding": styles.padding + "px",
        "--height": styles.height + "px",
        "--radius": styles.radius + "px",
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <ColoredBar
          style={{
            "--progress": value + "%",
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  padding: var(--padding);
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Round of the progress bar near beginning and end */
  overflow: hidden;
`;

const ColoredBar = styled.div`
  width: var(--progress);
  height: var(--height);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
