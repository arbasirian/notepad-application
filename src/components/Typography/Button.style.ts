import styled, { css } from 'styled-components';
import { BoxProps } from 'types/components';

const getCustomeType = (custome_type: string, custome_shape: string) => {
  switch (custome_type) {
    case 'primary':
      return css`
        border-color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.primary
            : custome_shape === 'outline'
            ? props.theme.colors.primary
            : 'transparent'};
        background-color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.primary
            : custome_shape === 'outline'
            ? 'transparent'
            : 'transparent'};
        color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.white
            : custome_shape === 'outline'
            ? props.theme.colors.primary
            : props.theme.colors.primary};
      `;
    case 'secondary':
      return css`
        border-color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.accent
            : custome_shape === 'outline'
            ? props.theme.colors.accent
            : 'transparent'};
        background-color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.accent
            : custome_shape === 'outline'
            ? 'transparent'
            : 'transparent'};
        color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.forceWhite
            : custome_shape === 'outline'
            ? props.theme.colors.accent
            : props.theme.colors.accent};
      `;
    case 'tertiary':
      return css`
        border-color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.gray7
            : custome_shape === 'outline'
            ? props.theme.colors.gray7
            : 'transparent'};
        background-color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.gray7
            : custome_shape === 'outline'
            ? 'transparent'
            : 'transparent'};
        color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.gray1
            : custome_shape === 'outline'
            ? props.theme.colors.gray1
            : props.theme.colors.gray1};
      `;
    case 'success':
      return css`
        border-color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.green
            : custome_shape === 'outline'
            ? props.theme.colors.green
            : 'transparent'};
        background-color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.green
            : custome_shape === 'outline'
            ? 'transparent'
            : 'transparent'};
        color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.forceWhite
            : custome_shape === 'outline'
            ? props.theme.colors.green
            : props.theme.colors.green};
      `;
    case 'danger':
      return css`
        border-color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.red
            : custome_shape === 'outline'
            ? props.theme.colors.red
            : 'transparent'};
        background-color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.red
            : custome_shape === 'outline'
            ? 'transparent'
            : 'transparent'};
        color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.forceWhite
            : custome_shape === 'outline'
            ? props.theme.colors.red
            : props.theme.colors.red};
      `;
    case 'alert':
      return css`
        border-color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.orange1
            : custome_shape === 'outline'
            ? props.theme.colors.orange1
            : 'transparent'};
        background-color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.orange1
            : custome_shape === 'outline'
            ? 'transparent'
            : 'transparent'};
        color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.forceWhite
            : custome_shape === 'outline'
            ? props.theme.colors.forceWhite
            : props.theme.colors.forceWhite};
      `;
    default:
      return css`
        border-color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.primary
            : custome_shape === 'outline'
            ? props.theme.colors.primary
            : 'transparent'};
        background-color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.primary
            : custome_shape === 'outline'
            ? 'transparent'
            : 'transparent'};
        color: ${(props) =>
          custome_shape === 'fill'
            ? props.theme.colors.white
            : custome_shape === 'outline'
            ? props.theme.colors.primary
            : props.theme.colors.primary};
      `;
  }
};

const getCustomeShape = (custome_size: string, custome_shape: string) => {
  switch (custome_size) {
    case 'large':
      return css`
        padding: ${custome_shape !== 'borderless' ? '14px 30px' : '14px 0'};
        height: 56px !important;

        span {
          font-size: 20px;
          line-height: 24px;

          letter-spacing: 0;
        }
      `;
    case 'small':
      return css`
        padding: ${custome_shape !== 'borderless' ? '4px 14px' : '2px 0'};
        height: 32px !important;

        span {
          font-size: 12px;
          line-height: 20px;

          letter-spacing: 0;
        }
      `;

    case 'xsmall':
      return css`
        padding: ${custome_shape !== 'borderless' ? '2px 8px' : '2px 0'};
        height: 24px !important;

        span {
          font-size: 12px;
          line-height: 100%;
          letter-spacing: 0;
        }
      `;

    default:
      // medium size
      return css`
        padding: ${custome_shape !== 'borderless' ? '10px 15px' : '10px 0'};
        height: 48px !important;

        span {
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0;
        }
      `;
  }
};

const Wrapper = styled.div<
  BoxProps &
    Partial<{
      custome_type: string;
      custome_shape: string;
      custome_size: string;
    }>
>`
  direction: ${(props) => (props.theme.language === 'fa' ? 'rtl' : 'ltr')};
  border-radius: 8px;
  border: 2px solid;
  line-height: 0;

  /* WIDTH */
  width: ${(props) => (props.width ? props.width : '')};
  min-width: ${(props) => (props.minWidth ? props.minWidth : '')};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '')};

  /* HEIGHT */
  height: ${(props) => (props.height ? props.height : '')};
  min-height: ${(props) => (props.minHeight ? props.minHeight : '')};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : '')};

  /* MARGIN */
  margin: ${(props) => (props.margin ? props.margin : '')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '')};
  margin-inline-start: ${(props) =>
    props.marginRight ? props.marginRight : ''};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '')};
  margin-inline-end: ${(props) => (props.marginLeft ? props.marginLeft : '')};

  /* PADDING */
  padding: ${(props) => (props.padding ? props.padding : '')};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : '')};
  padding-inline-end: ${(props) =>
    props.paddingRight ? props.paddingRight : ''};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : ''};
  padding-inline-start: ${(props) =>
    props.paddingLeft ? props.paddingLeft : ''};

  ${({ custome_type, custome_shape }) =>
    custome_type &&
    custome_shape &&
    getCustomeType(custome_type, custome_shape)};
  ${({ custome_size, custome_shape }) =>
    custome_size &&
    custome_shape &&
    getCustomeShape(custome_size, custome_shape)};

  &:focus {
    ${({ custome_type, custome_shape }) =>
      custome_type &&
      custome_shape &&
      getCustomeType(custome_type, custome_shape)};
  }

  &:hover {
    ${({ custome_type, custome_shape }) =>
      custome_type &&
      custome_shape &&
      getCustomeType(custome_type, custome_shape)};
    filter: brightness(0.8);
  }
  &[disabled] {
    ${({ custome_type, custome_shape }) =>
      custome_type &&
      custome_shape &&
      getCustomeType(custome_type, custome_shape)};
    opacity: 0.2;
  }

  @media ${({ theme }) => theme.device.desktop} {
    /* WIDTH */
    width: ${(props) => (props.widthD ? props.widthD : '')};
    min-width: ${(props) => (props.minWidthD ? props.minWidthD : '')};
    max-width: ${(props) => (props.maxWidthD ? props.maxWidthD : '')};

    /* HEIGHT */
    height: ${(props) => (props.heightD ? props.heightD : '')};
    min-height: ${(props) => (props.minHeightD ? props.minHeightD : '')};
    max-height: ${(props) => (props.maxHeightD ? props.maxHeightD : '')};

    /* MARGIN */
    margin: ${(props) => (props.marginD ? props.marginD : '')};
    margin-top: ${(props) => (props.marginTopD ? props.marginTopD : '')};
    margin-inline-start: ${(props) =>
      props.marginRightD ? props.marginRightD : ''};
    margin-bottom: ${(props) =>
      props.marginBottomD ? props.marginBottomD : ''};
    margin-inline-end: ${(props) =>
      props.marginLeftD ? props.marginLeftD : ''};

    /* PADDING */
    padding: ${(props) => (props.paddingD ? props.paddingD : '')};
    padding-top: ${(props) => (props.paddingTopD ? props.paddingTopD : '')};
    padding-inline-end: ${(props) =>
      props.paddingRightD ? props.paddingRightD : ''};
    padding-bottom: ${(props) =>
      props.paddingBottomD ? props.paddingBottomD : ''};
    padding-inline-start: ${(props) =>
      props.paddingLeftD ? props.paddingLeftD : ''};
  }

  @media ${({ theme }) => theme.device.laptop} {
    /* WIDTH */
    width: ${(props) => (props.widthL ? props.widthL : '')};
    min-width: ${(props) => (props.minWidthL ? props.minWidthL : '')};
    max-width: ${(props) => (props.maxWidthL ? props.maxWidthL : '')};

    /* HEIGHT */
    height: ${(props) => (props.heightL ? props.heightL : '')};
    min-height: ${(props) => (props.minHeightL ? props.minHeightL : '')};
    max-height: ${(props) => (props.maxHeightL ? props.maxHeightL : '')};

    /* MARGIN */
    margin: ${(props) => (props.marginL ? props.marginL : '')};
    margin-top: ${(props) => (props.marginTopL ? props.marginTopL : '')};
    margin-inline-start: ${(props) =>
      props.marginRightL ? props.marginRightL : ''};
    margin-bottom: ${(props) =>
      props.marginBottomL ? props.marginBottomL : ''};
    margin-inline-end: ${(props) =>
      props.marginLeftL ? props.marginLeftL : ''};

    /* PADDING */
    padding: ${(props) => (props.paddingL ? props.paddingL : '')};
    padding-top: ${(props) => (props.paddingTopL ? props.paddingTopL : '')};
    padding-inline-end: ${(props) =>
      props.paddingRightL ? props.paddingRightL : ''};
    padding-bottom: ${(props) =>
      props.paddingBottomL ? props.paddingBottomL : ''};
    padding-inline-start: ${(props) =>
      props.paddingLeftL ? props.paddingLeftL : ''};
  }

  @media ${({ theme }) => theme.device.tablet} {
    /* WIDTH */
    width: ${(props) => (props.widthT ? props.widthT : '')};
    min-width: ${(props) => (props.minWidthT ? props.minWidthT : '')};
    max-width: ${(props) => (props.maxWidthT ? props.maxWidthT : '')};

    /* HEIGHT */
    height: ${(props) => (props.heightT ? props.heightT : '')};
    min-height: ${(props) => (props.minHeightT ? props.minHeightT : '')};
    max-height: ${(props) => (props.maxHeightT ? props.maxHeightT : '')};

    /* MARGIN */
    margin: ${(props) => (props.marginT ? props.marginT : '')};
    margin-top: ${(props) => (props.marginTopT ? props.marginTopT : '')};
    margin-inline-start: ${(props) =>
      props.marginRightT ? props.marginRightT : ''};
    margin-bottom: ${(props) =>
      props.marginBottomT ? props.marginBottomT : ''};
    margin-inline-end: ${(props) =>
      props.marginLeftT ? props.marginLeftT : ''};

    /* PADDING */
    padding: ${(props) => (props.paddingT ? props.paddingT : '')};
    padding-top: ${(props) => (props.paddingTopT ? props.paddingTopT : '')};
    padding-inline-end: ${(props) =>
      props.paddingRightT ? props.paddingRightT : ''};
    padding-bottom: ${(props) =>
      props.paddingBottomT ? props.paddingBottomT : ''};
    padding-inline-start: ${(props) =>
      props.paddingLeftT ? props.paddingLeftT : ''};
  }

  @media ${({ theme }) => theme.device.mobile} {
    /* WIDTH */
    width: ${(props) => (props.widthM ? props.widthM : '')};
    min-width: ${(props) => (props.minWidthM ? props.minWidthM : '')};
    max-width: ${(props) => (props.maxWidthM ? props.maxWidthM : '')};

    /* HEIGHT */
    height: ${(props) => (props.heightM ? props.heightM : '')};
    min-height: ${(props) => (props.minHeightM ? props.minHeightM : '')};
    max-height: ${(props) => (props.maxHeightM ? props.maxHeightM : '')};

    /* MARGIN */
    margin: ${(props) => (props.marginM ? props.marginM : '')};
    margin-top: ${(props) => (props.marginTopM ? props.marginTopM : '')};
    margin-inline-start: ${(props) =>
      props.marginRightM ? props.marginRightM : ''};
    margin-bottom: ${(props) =>
      props.marginBottomM ? props.marginBottomM : ''};
    margin-inline-end: ${(props) =>
      props.marginLeftM ? props.marginLeftM : ''};

    /* PADDING */
    padding: ${(props) => (props.paddingM ? props.paddingM : '')};
    padding-top: ${(props) => (props.paddingTopM ? props.paddingTopM : '')};
    padding-inline-end: ${(props) =>
      props.paddingRightM ? props.paddingRightM : ''};
    padding-bottom: ${(props) =>
      props.paddingBottomM ? props.paddingBottomM : ''};
    padding-inline-start: ${(props) =>
      props.paddingLeftM ? props.paddingLeftM : ''};
  }
`;

export default Wrapper;
