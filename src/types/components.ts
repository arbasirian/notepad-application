import { ReactNode, RefObject, CSSProperties } from 'react';

import { Color } from 'types';

type GlobalValues = 'inherit' | 'initial' | 'revert' | 'unset';

type Ref<T> = RefObject<T> | ((ref: T) => void);

/**
 * Shared Props
 */

type WidthAttributes =
  | 'minWidth'
  | 'minWidthD'
  | 'minWidthL'
  | 'minWidthT'
  | 'minWidthM'
  | 'width'
  | 'widthD'
  | 'widthL'
  | 'widthT'
  | 'widthM'
  | 'maxWidth'
  | 'maxWidthD'
  | 'maxWidthL'
  | 'maxWidthT'
  | 'maxWidthM';

type HeightAttributes =
  | 'height'
  | 'heightD'
  | 'heightL'
  | 'heightT'
  | 'heightM'
  | 'minHeight'
  | 'minHeightD'
  | 'minHeightL'
  | 'minHeightT'
  | 'minHeightM'
  | 'maxHeight'
  | 'maxHeightD'
  | 'maxHeightL'
  | 'maxHeightT'
  | 'maxHeightM';

type PaddingAttributes =
  | 'padding'
  | 'paddingD'
  | 'paddingL'
  | 'paddingT'
  | 'paddingM'
  | 'paddingTop'
  | 'paddingTopD'
  | 'paddingTopL'
  | 'paddingTopT'
  | 'paddingTopM'
  | 'paddingRight'
  | 'paddingRightD'
  | 'paddingRightL'
  | 'paddingRightT'
  | 'paddingRightM'
  | 'paddingBottom'
  | 'paddingBottomD'
  | 'paddingBottomL'
  | 'paddingBottomT'
  | 'paddingBottomM'
  | 'paddingLeft'
  | 'paddingLeftD'
  | 'paddingLeftL'
  | 'paddingLeftT'
  | 'paddingLeftM';

type MarginAttributes =
  | 'margin'
  | 'marginD'
  | 'marginL'
  | 'marginT'
  | 'marginM'
  | 'marginTop'
  | 'marginTopD'
  | 'marginTopL'
  | 'marginTopT'
  | 'marginTopM'
  | 'marginRight'
  | 'marginRightD'
  | 'marginRightL'
  | 'marginRightT'
  | 'marginRightM'
  | 'marginBottom'
  | 'marginBottomD'
  | 'marginBottomL'
  | 'marginBottomT'
  | 'marginBottomM'
  | 'marginLeft'
  | 'marginLeftD'
  | 'marginLeftL'
  | 'marginLeftT'
  | 'marginLeftM';

type BorderAttributes =
  | 'border'
  | 'borderD'
  | 'borderL'
  | 'borderT'
  | 'borderM'
  | 'borderTop'
  | 'borderTopD'
  | 'borderTopL'
  | 'borderTopT'
  | 'borderTopM'
  | 'borderRight'
  | 'borderRightD'
  | 'borderRightL'
  | 'borderRightT'
  | 'borderRightM'
  | 'borderBottom'
  | 'borderBottomD'
  | 'borderBottomL'
  | 'borderBottomT'
  | 'borderBottomM'
  | 'borderLeft'
  | 'borderLeftD'
  | 'borderLeftL'
  | 'borderLeftT'
  | 'borderLeftM';

type SharedSizeAttributes =
  | WidthAttributes
  | HeightAttributes
  | PaddingAttributes
  | MarginAttributes
  | BorderAttributes
  | 'borderRadius'
  | 'borderRadiusD'
  | 'borderRadiusL'
  | 'borderRadiusT'
  | 'borderRadiusM'
  | 'top'
  | 'topD'
  | 'topL'
  | 'topT'
  | 'topM'
  | 'right'
  | 'rightD'
  | 'rightL'
  | 'rightT'
  | 'rightM'
  | 'bottom'
  | 'bottomD'
  | 'bottomL'
  | 'bottomT'
  | 'bottomM'
  | 'left'
  | 'leftD'
  | 'leftL'
  | 'leftT'
  | 'leftM';

type SharedSizeProps = Partial<
  Record<SharedSizeAttributes, GlobalValues | string>
>;

type SharedAlign =
  | GlobalValues
  | 'left'
  | 'center'
  | 'right'
  | 'start'
  | 'end'
  | 'justify';

export type SharedDisplay =
  | GlobalValues
  | 'inline'
  | 'block'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'none';

type SharedFunction = (...args: any[]) => any;

type SharedPosition =
  | GlobalValues
  | 'unset'
  | 'inherit'
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'static'
  | 'sticky';

type SharedNamedProps = Partial<{
  display: SharedDisplay;
  displayD: SharedDisplay;
  displayL: SharedDisplay;
  displayT: SharedDisplay;
  displayM: SharedDisplay;
  position: SharedPosition;
  positionD: SharedPosition;
  positionL: SharedPosition;
  positionT: SharedPosition;
  positionM: SharedPosition;
  background: Color;
  backgroundD: Color;
  backgroundL: Color;
  backgroundT: Color;
  backgroundM: Color;
  borderColor: Color;
  borderColorD: Color;
  borderColorL: Color;
  borderColorT: Color;
  borderColorM: Color;
  align: SharedAlign;
  alignD: SharedAlign;
  alignL: SharedAlign;
  alignT: SharedAlign;
  alignM: SharedAlign;
  children: ReactNode;
  id: string;
  className: string;
  style: CSSProperties;
  as: JSX.Element & any; // @TODO: remove any;
  src: string;
  alt: string;
  to: string;
  onClick: Function | SharedFunction;
  onScroll: Function | SharedFunction;
  onMouseEnter: Function | SharedFunction;
  onMouseLeave: Function | SharedFunction;
}>;

type SharedProps = SharedSizeProps &
  SharedNamedProps &
  Partial<{
    fontFamily: TextFontFamily;
  }>;

/**
 * Box Props
 */

type BoxOverflow =
  | GlobalValues
  | 'visible'
  | 'hidden'
  | 'clip'
  | 'scroll'
  | 'auto';

type BoxVerticalAlign =
  | GlobalValues
  | 'baseline'
  | 'sub'
  | 'super'
  | 'text-top'
  | 'text-bottom'
  | 'middle'
  | 'top'
  | 'bottom';

type BoxNamedProps = Partial<{
  overflow: BoxOverflow;
  overflowD: BoxOverflow;
  overflowL: BoxOverflow;
  overflowT: BoxOverflow;
  overflowM: BoxOverflow;
  overflowx: BoxOverflow;
  overflowxD: BoxOverflow;
  overflowxL: BoxOverflow;
  overflowxT: BoxOverflow;
  overflowxM: BoxOverflow;
  overflowy: BoxOverflow;
  overflowyD: BoxOverflow;
  overflowyL: BoxOverflow;
  overflowyT: BoxOverflow;
  overflowyM: BoxOverflow;
  verticalAlign: BoxVerticalAlign;
  verticalAlignD: BoxVerticalAlign;
  verticalAlignL: BoxVerticalAlign;
  verticalAlignT: BoxVerticalAlign;
  verticalAlignM: BoxVerticalAlign;
  ref: Ref<HTMLDivElement>;
}>;

export type BoxProps = SharedProps & BoxNamedProps;

type SharedBoxProps = Omit<
  BoxProps,
  | 'verticalAlign'
  | 'verticalAlignD'
  | 'verticalAlignL'
  | 'verticalAlignT'
  | 'verticalAlignM'
>;

/**
 * Flex Props
 */

type FlexWrap = GlobalValues | 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexJustifyContent =
  | GlobalValues
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'normal'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'safe'
  | 'unsafe';
type FlexAlignItems =
  | GlobalValues
  | 'normal'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'stretch'
  | 'safe'
  | 'unsafe';
type FlexDirection =
  | GlobalValues
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse';

type FlexSizeAttributes =
  | 'flexOrder'
  | 'flexOrderD'
  | 'flexOrderL'
  | 'flexOrderT'
  | 'flexOrderM'
  | 'flexGap'
  | 'flexGapD'
  | 'flexGapL'
  | 'flexGapT'
  | 'flexGapM';

type FlexSizeProps = Partial<Record<FlexSizeAttributes, GlobalValues | string>>;

type FlexNamedProps = Partial<{
  flexWrap: FlexWrap;
  flexWrapD: FlexWrap;
  flexWrapL: FlexWrap;
  flexWrapT: FlexWrap;
  flexWrapM: FlexWrap;
  justifyContent: FlexJustifyContent;
  justifyContentD: FlexJustifyContent;
  justifyContentL: FlexJustifyContent;
  justifyContentT: FlexJustifyContent;
  justifyContentM: FlexJustifyContent;
  alignItems: FlexAlignItems;
  alignItemsD: FlexAlignItems;
  alignItemsL: FlexAlignItems;
  alignItemsT: FlexAlignItems;
  alignItemsM: FlexAlignItems;
  flexDirection: FlexDirection;
  flexDirectionD: FlexDirection;
  flexDirectionL: FlexDirection;
  flexDirectionT: FlexDirection;
  flexDirectionM: FlexDirection;
}>;

export type FlexProps = SharedBoxProps & FlexSizeProps & FlexNamedProps;

type SharedFlexProps = Pick<
  FlexProps,
  | 'justifyContent'
  | 'justifyContentD'
  | 'justifyContentL'
  | 'justifyContentT'
  | 'justifyContentM'
>;

/**
 * Grid Props
 */

type GridAttributes =
  | 'gridGap'
  | 'gridGapD'
  | 'gridGapL'
  | 'gridGapT'
  | 'gridGapM'
  | 'gridTemplateRows'
  | 'gridTemplateRowsD'
  | 'gridTemplateRowsL'
  | 'gridTemplateRowsT'
  | 'gridTemplateRowsM'
  | 'gridTemplateColumns'
  | 'gridTemplateColumnsD'
  | 'gridTemplateColumnsL'
  | 'gridTemplateColumnsT'
  | 'gridTemplateColumnsM'
  | 'gridTemplateAreas'
  | 'gridTemplateAreasD'
  | 'gridTemplateAreasL'
  | 'gridTemplateAreasT'
  | 'gridTemplateAreasM'
  | 'gridAutoRows'
  | 'gridAutoRowsD'
  | 'gridAutoRowsL'
  | 'gridAutoRowsT'
  | 'gridAutoRowsM'
  | 'gridAutoFlow'
  | 'gridAutoFlowD'
  | 'gridAutoFlowL'
  | 'gridAutoFlowT'
  | 'gridAutoFlowM'
  | 'gridAutoColumns'
  | 'gridAutoColumnsD'
  | 'gridAutoColumnsL'
  | 'gridAutoColumnsT'
  | 'gridAutoColumnsM';

export type GridProps = SharedBoxProps &
  SharedFlexProps &
  Partial<Record<GridAttributes, GlobalValues | string>>;

/**
 * Text Props
 */

type TextSizeAttributes =
  | 'fontSize'
  | 'fontSizeD'
  | 'fontSizeL'
  | 'fontSizeT'
  | 'fontSizeM'
  | 'lineHeight'
  | 'lineHeightD'
  | 'lineHeightL'
  | 'lineHeightT'
  | 'lineHeightM'
  | 'letterSpacing'
  | 'letterSpacingD'
  | 'letterSpacingL'
  | 'letterSpacingT'
  | 'letterSpacingM';

type TextSizeProps = Partial<Record<TextSizeAttributes, GlobalValues | string>>;

type TextDirection = GlobalValues | 'ltr' | 'rtl';
type TextFontFamily =
  | GlobalValues
  | 'Vazir'
  | 'Avenir-Regular'
  | 'Avenir-Black';
type TextWeight =
  | GlobalValues
  | '400'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'normal'
  | 'bold';

type TextNamedProps = Partial<{
  direction: TextDirection;
  fontFamily: TextFontFamily;
  weight: TextWeight;
  color: Color;
  colorD: Color;
  colorL: Color;
  colorT: Color;
  colorM: Color;
  whiteSpace: string;
  overflow: string;
  textOverflow: string;
  ref: Ref<HTMLSpanElement>;
}>;

export type TextProps = SharedProps & TextSizeProps & TextNamedProps;

/**
 * Title Props
 */

export type TitleProps = Omit<TextProps, TextSizeAttributes>;

/**
 * Button Props
 */

type ButtonSizeProps = Partial<
  Record<
    WidthAttributes | HeightAttributes | PaddingAttributes | MarginAttributes,
    GlobalValues | string
  >
>;

type ButtonNamedProps = Partial<{
  type: 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'alert';
  shape: 'fill' | 'outline' | 'borderless';
  size: 'xsmall' | 'small' | 'medium' | 'large';
  loading: boolean;
  disabled: boolean;
  icon: JSX.Element;
}>;

export type ButtonProps = Pick<
  SharedProps,
  | 'className'
  | 'style'
  | 'onClick'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'as'
  | 'to'
> &
  ButtonSizeProps &
  ButtonNamedProps;
