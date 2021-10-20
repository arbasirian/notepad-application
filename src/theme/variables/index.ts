import colors from './colors';
import device, { breakpoints } from './devices';

export default (theme: string, language: string) => {
  return {
    colors: colors(theme),
    device: device,
    breakpoints: breakpoints,
    language: language,
  };
};
