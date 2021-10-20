import colors from 'theme/variables/colors';

export type Color = keyof ReturnType<typeof colors> | 'transparent';
