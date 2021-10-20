import { css } from 'styled-components';

import { breakpoints } from '../variables/devices';

export const image = (src: string, width: number, height: number) => css`
  width: ${width};
  height: ${height};
  background-image: url(${src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const getWidth = (): number => {
  try {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  } catch (_) {
    return 1280;
  }
};

export const getIsDesktop = (): boolean => {
  try {
    const width: number = getWidth();
    const tabletSize: number = Number(breakpoints.m.split('px')[0]);

    return width > tabletSize;
  } catch (_) {
    return true;
  }
};

export const getIsMobile = (): boolean => {
  try {
    const width: number = getWidth();
    const mobileSize: number = Number(breakpoints.s.split('px')[0]);

    return width <= mobileSize;
  } catch (_) {
    return true;
  }
};
