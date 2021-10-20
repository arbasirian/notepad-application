import colors from './colors';
import device, { breakpoints } from './devices';

export default (language: string) => {
  return {
    colors: colors(),
    device: device,
    breakpoints: breakpoints,
    language: language,
  };
};
