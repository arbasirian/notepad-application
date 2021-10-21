import styled from 'styled-components';

export default styled.section`
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  label {
    color: ${(props) => props.theme.colors.gray1};
    font-size: 12px;
    margin-bottom: 8px;
    font-weight: normal;

    .req-sign {
      color: ${(props) => props.theme.colors.red};
    }
  }
  .ant-input-number-disabled {
    background-color: ${(props) => props.theme.colors.gray15} !important;
  }

  &.input {
    margin-bottom: 16px;
    position: relative;
    color: #000;
    width: 100%;

    &.disabled {
      /* opacity: 0.3; */
      textarea,
      .textarea,
      .ant-input,
      .ant-input-number,
      .ant-select-selector,
      .ant-input-number-disabled {
        background-color: ${(props) => props.theme.colors.gray15} !important;
      }
    }

    &.hasError {
      margin: 0;

      &:focus-within {
      }
    }

    &:focus-within {
      .ant-input {
        border: 1px solid ${(props) => props.theme.colors.gray3} !important;
      }
    }

    &.hasError {
      .ant-input {
        border: 1px solid ${(props) => props.theme.colors.red} !important;
      }
    }

    &.half-input {
      width: 50%;
      display: inline-block;

      .ant-select {
        padding: 0;
      }
    }
  }

  .ant-input {
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.gray14} !important;
    height: 48px;
    outline: none;
    box-shadow: none;
    font-weight: normal;
    color: ${(props) => props.theme.colors.gray1};
    font-size: 14px;
    border-radius: 5px;
    padding: 0 16px;
    margin-top: 8px;
  }

  .text-danger {
    right: 0;
    padding: 2px 16px;
    border-radius: 5px;
    z-index: 1;
    text-align: left;
    margin-bottom: 5px;

    .text-danger--text {
      color: ${(props) => props.theme.colors.red};
      font-size: 12px;
    }

    &.field-error {
      width: 100%;
    }
  }

  /***************************** [ Text Input ] **************************/
  &.text-input {
    &.textarea {
      textarea {
        width: 100%;
        height: 130px;
        resize: none;
        padding-top: 15px;
      }

      label {
        bottom: 92px;
      }
    }

    .input-desc {
      position: absolute;
      bottom: -28px;
      left: 10px;
      color: #999fbf;
    }
  }

  /***************************** [ Text Input ] **************************/
  &.number-input {
    .ant-input-number {
      background-color: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.gray14} !important;
      height: 48px;
      outline: none;
      box-shadow: none;
      color: ${(props) => props.theme.colors.gray1};
      font-size: 14px;
      border-radius: 5px;
      margin-top: 8px;
      width: 100%;
      .ant-input-number-input-wrap {
        height: 48px;
        input {
          height: 48px;
          padding: 0 16px;
        }
      }
    }
  }

  /***************************** [ Select Input ] **************************/
  &.select-input {
    .ant-select {
      width: 100%;
      height: 48px;
      margin-top: 8px;
      direction: ltr;
      .ant-select-selector {
        background-color: ${(props) => props.theme.colors.white};
        border: 1px solid ${(props) => props.theme.colors.gray3};
        height: 48px;
        outline: none;
        box-shadow: none;
        color: ${(props) => props.theme.colors.gray1};
        font-size: 14px;
        border-radius: 5px;
        text-align: left;

        padding: 0 16px;
      }

      &.ant-select-focused {
        .ant-select-selector {
          border: 1px solid ${(props) => props.theme.colors.gray14};
        }
      }

      &.ant-select-open {
        .ant-select-arrow {
          transform: rotate(180deg);
        }
      }
    }
    .ant-select-single .ant-select-selector .ant-select-selection-item,
    .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
      line-height: 48px;
      color: ${(props) => props.theme.colors.gray1};
    }
    .ant-select-single:not(.ant-select-customize-input)
      .ant-select-selector
      .ant-select-selection-search-input {
      height: 48px;
    }

    .ant-select-dropdown {
      background-color: ${(props) => props.theme.colors.white};
      box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.32);
      border-radius: 5px;
      border: 1px solid ${(props) => props.theme.colors.gray14};
      direction: ltr;
      .ant-select-item {
        padding: 8px 16px;
        color: ${(props) => props.theme.colors.gray1};
        line-height: 24px;
        transition: all ease 0.2s;
        border-bottom: 1px solid ${(props) => props.theme.colors.gray5};
        direction: ltr;
        &:last-child {
          border: 0;
        }

        &.ant-select-item-option-active,
        &.ant-select-item-option-selected {
          color: ${(props) => props.theme.colors.gray12};
          background-color: ${(props) => props.theme.colors.white};
        }

        .ant-select-item-option-content {
          direction: ltr;

          .country-flag {
            float: right;
            margin-left: 6px;
          }

          .country-name {
            float: right;
          }
        }
      }
    }

    &.hasError {
      .ant-select {
        .ant-select-selector {
          border: 1px solid ${(props) => props.theme.colors.red};
        }
      }
    }
  }

  /***************************** [ Radio Input ] **************************/
  &.radio-input {
    .ant-radio-group {
      .ant-radio-wrapper {
        position: inherit;
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        font-size: 14px !important;
        line-height: 24px;
        margin-right: 0;
        font-weight: 600;
        color: ${(props) => props.theme.colors.gray1};

        &:last-child {
          margin-bottom: 0;
        }

        .ant-radio {
          margin-left: 8px;

          input {
            display: none;
          }

          .ant-radio-inner {
            width: 24px;
            height: 24px;
            display: inline-block;
            vertical-align: middle;
            border-radius: 50%;
            position: relative;
            transition: all ease 0.2s;
            background-color: ${(props) => props.theme.colors.gray7};
            border: 2px solid ${(props) => props.theme.colors.gray1};

            &:after {
              content: '';
              position: absolute;
              width: 8px;
              height: 8px;
              background-color: ${(props) => props.theme.colors.primary};
              border-radius: 50%;
              top: 6px;
              left: 6px;
              transition: all ease 0.2s;
            }
          }

          &.ant-radio-checked {
            .ant-radio-inner {
              border-color: ${(props) => props.theme.colors.accent} !important;
              background-color: ${(props) => props.theme.colors.accent};
            }
          }
        }
      }

      &.ant-radio-group-small {
        .ant-radio-wrapper {
          font-size: 12px !important;

          .ant-radio {
            .ant-radio-inner {
              width: 16px;
              height: 16px;

              &:before {
                width: 6px;
                height: 6px;
                top: 3px;
                left: 3px;
              }
            }
          }
        }
      }
    }

    .ant-radio-disabled {
      & + span {
        color: ${(props) => props.theme.colors.white};
      }
    }
  }

  /***************************** [ Checkbox Input ] ***********************/
  &.checkbox-input {
    &.no-margin {
      margin: 0 !important;
    }
    .ant-checkbox-wrapper {
      color: ${(props) => props.theme.colors.gray12};
      margin: 0;

      .ant-checkbox {
        top: 0px;

        .ant-checkbox-inner {
          width: 24px;
          height: 24px;
          border-radius: 5px;
          background-color: ${(props) => props.theme.colors.gray7};
          border: 2px solid ${(props) => props.theme.colors.gray1};
          display: inline-block;
          vertical-align: middle;

          &:after {
            left: 5px;
          }
        }

        &.ant-checkbox-checked {
          &:after {
            display: none;
          }

          .ant-checkbox-inner {
            border-color: ${(props) => props.theme.colors.primary} !important;
            background-color: ${(props) => props.theme.colors.primary};
          }
        }
      }
    }

    &.disabled {
      .ant-checkbox {
        & + span {
          color: ${(props) => props.theme.colors.gray9};
        }
      }
    }
  }

  /***************************** [ Select Country ] **************************/
  &.select-country {
    .ant-select {
      .ant-select-selector {
        padding-top: 9px;
      }

      .ant-select-selection-item {
        .country-flag {
          margin-left: 14px;
        }
      }
    }
  }

  /***************************** [ Switch Input ] **************************/
  &.switch-input {
    display: flex;
    justify-content: space-between;
    direction: rtl !important;
    label {
      bottom: 0 !important;
      display: inline-block;
      position: inherit;
      font-size: 14px !important;
      line-height: 24px !important;
      order: 2;
      /* margin-right: 7.5rem; */
      margin-bottom: 0 !important;
    }

    .ant-switch {
      display: inline-block;
      vertical-align: middle;
      background-color: ${(props) => props.theme.colors.gray5};
      width: 24px;
      height: 16px;
      border-radius: 40px;
      min-width: 28px !important;
      outline: none !important;
      margin: 5px;
      .ant-switch-handle {
        width: 10px;
        height: 10px;
        left: 4px;
        top: 3px;

        &:before {
          border-radius: 50%;
        }
      }

      &.ant-switch-checked {
        background-color: ${(props) => props.theme.colors.green2};

        .ant-switch-handle {
          left: calc(100% - 8px - 5px) !important;
        }
      }

      &.ant-switch-small {
        width: 40px;
        height: 24px;

        .ant-switch-handle {
          width: 20px;
          height: 20px;
          left: 2px;
          top: 3px;
        }

        &.ant-switch-checked {
          .ant-switch-handle {
            left: calc(100% - 8px - 5px) !important;
          }
        }
      }
    }
  }

  /***************************** [ Range Picker Input ] **************************/
  &.date-picker-input {
    .ant-picker-range {
      height: 48px;
      line-height: 48px;
      background-color: ${(props) => props.theme.colors.gray3};
      border-radius: 5px;
      border: 1px solid ${(props) => props.theme.colors.gray3};
      padding-top: 18px;
      padding-right: 15px;

      .ant-picker-input {
        input {
          color: ${(props) => props.theme.colors.white};
        }
      }

      .ant-picker-suffix {
        margin-top: -15px;

        .range-picker-suffix {
          width: 24px;
          height: 24px;
          background: url(/assets/images/datepicker-calendar-icon.svg);
        }
      }

      .ant-picker-active-bar {
        display: none;
      }
    }

    .ant-picker {
      background-color: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.gray3} !important;
      height: 48px;
      outline: none;
      box-shadow: none;
      color: ${(props) => props.theme.colors.gray1};
      font-size: 14px;
      border-radius: 5px;
      padding: 0 16px;
      margin-top: 8px;
      width: 100%;
    }

    .ant-picker-dropdown {
      .ant-picker-panel-container {
        border-radius: 5px;
        background-color: ${(props) => props.theme.colors.gray7};
        border: 1px solid ${(props) => props.theme.colors.gray5};

        .ant-picker-panels {
          .ant-picker-panel {
            border: 0;

            .ant-picker-date-panel {
              .ant-picker-header {
                border: 0;

                .ant-picker-header-view {
                  color: #fff;
                }
              }

              .ant-picker-body {
                .ant-picker-content {
                  thead {
                    tr {
                      th {
                        color: ${(props) => props.theme.colors.gray1};
                      }
                    }
                  }

                  tbody {
                    tr {
                      td {
                        &.ant-picker-cell {
                          color: ${(props) => props.theme.colors.gray1};

                          &.ant-picker-cell-in-view {
                            color: ${(props) => props.theme.colors.white};
                          }

                          &.ant-picker-cell-disabled {
                            &:before {
                              background-color: transparent;
                            }

                            .ant-picker-cell-inner {
                              color: ${(props) => props.theme.colors.gray1};
                            }
                          }

                          &.ant-picker-cell-in-range {
                            &:before {
                              background-color: ${(props) =>
                                props.theme.colors.gray5};
                            }

                            .ant-picker-cell-inner {
                              color: ${(props) => props.theme.colors.white};
                              background-color: ${(props) =>
                                props.theme.colors.gray5};
                            }

                            &:hover {
                              .ant-picker-cell-inner {
                                color: ${(props) => props.theme.colors.accent};
                                background-color: ${(props) =>
                                  props.theme.colors.gray5};
                              }

                              &:before {
                                background-color: ${(props) =>
                                  props.theme.colors.gray5};
                              }
                            }
                          }

                          &.ant-picker-cell-range-hover-start,
                          &.ant-picker-cell-range-hover-end {
                            background-color: ${(props) =>
                              props.theme.colors.gray5};

                            .ant-picker-cell-inner {
                              color: ${(props) => props.theme.colors.accent};
                            }

                            &:before {
                              background-color: ${(props) =>
                                props.theme.colors.gray5};
                            }
                          }

                          .ant-picker-cell-inner {
                            border-radius: 0;
                          }

                          &.ant-picker-cell-range-start {
                            &.ant-picker-cell-selected {
                              &:before {
                                background-color: ${(props) =>
                                  props.theme.colors.gray5};
                              }

                              .ant-picker-cell-inner {
                                color: ${(props) => props.theme.colors.white};
                                background-color: ${(props) =>
                                  props.theme.colors.gray3};
                              }
                            }

                            &:before {
                              background-color: ${(props) =>
                                props.theme.colors.gray5};
                            }

                            .ant-picker-cell-inner {
                              color: ${(props) => props.theme.colors.white};
                              background-color: ${(props) =>
                                props.theme.colors.gray3};
                            }
                          }

                          &.ant-picker-cell-range-end {
                            &:before {
                              background-color: ${(props) =>
                                props.theme.colors.gray5};
                            }

                            .ant-picker-cell-inner {
                              color: ${(props) => props.theme.colors.white};
                              background-color: ${(props) =>
                                props.theme.colors.gray3};
                            }
                          }

                          &:hover {
                            .ant-picker-cell-inner {
                              color: ${(props) => props.theme.colors.accent};
                              background-color: ${(props) =>
                                props.theme.colors.gray5};
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  /***************************** [ Phone Input ] **************************/
  .PhoneInput {
    display: flex;
    align-items: center;
  }

  .PhoneInputInput {
    flex: 1;
    min-width: 0;
  }

  .PhoneInputCountryIcon {
    width: calc(1em * 1.5);
    width: calc(1.5 * 1.5);
    height: 1em;
    height: 1em;
  }

  .PhoneInputCountryIcon--square {
    width: 1em;
    width: 1em;
  }

  .PhoneInputCountryIcon--border {
    background-color: rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(0, 0, 0, 0.5);
  }

  .PhoneInputCountryIconImg {
    display: block;
    width: 100%;
    height: 100%;
  }

  .PhoneInputInternationalIconPhone {
    opacity: 0.8;
  }

  .PhoneInputInternationalIconGlobe {
    opacity: 0.65;
  }

  .PhoneInputCountry {
    position: relative;
    align-self: stretch;
    display: flex;
    align-items: center;
    margin-right: 0.35em;
  }

  .PhoneInputCountrySelect {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    border: 0;
    opacity: 0;
    cursor: pointer;
    &:focus {
      + {
        .PhoneInputCountryIcon {
          + {
            .PhoneInputCountrySelectArrow {
              opacity: 1;
              color: #03b2cb;
            }
          }
          .PhoneInputInternationalIconGlobe {
            opacity: 1;
            color: #03b2cb;
          }
        }
        .PhoneInputCountryIcon--border {
          box-shadow: 0 0 0 1px #03b2cb, inset 0 0 0 1px #03b2cb;
        }
      }
    }
  }
  .PhoneInputCountrySelect[disabled] {
    cursor: default;
  }
  .PhoneInputCountrySelectArrow {
    display: block;
    content: '';
    width: 0.3em;
    height: 0.3em;
    margin-left: 0.35em;
    border-style: solid;
    border-color: inherit;
    border-top-width: 0;
    border-bottom-width: 1px;
    border-left-width: 0;
    border-right-width: 1px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    opacity: 0.45;
  }

  &.phone-input {
    & > label {
      bottom: 41px;
      font-size: 11px;
    }

    .PhoneInput {
      display: block;
      align-items: center;
      height: 50px;
      border: 0;

      .PhoneInputCountry {
        position: absolute;
        right: 12px;
        bottom: 17px;
        margin: 0;
      }

      .PhoneInputInput {
        background-color: ${(props) => props.theme.colors.gray7};
        border: 1px solid ${(props) => props.theme.colors.gray3};
        height: 48px;
        outline: none;
        box-shadow: none;
        color: ${(props) => props.theme.colors.white};
        font-size: 14px;
        border-radius: 5px;
        text-align: left;

        padding-left: 16px;
        padding-right: 16px;
        width: 100%;
      }
    }
  }

  &.input-advance {
    position: relative;
    display: flex;
    background-color: ${(props) => props.theme.colors.gray7};
    border: 1px solid ${(props) => props.theme.colors.gray5} !important;
    height: 48px;
    outline: none;
    box-shadow: none;
    font-weight: unset;
    color: ${(props) => props.theme.colors.white};
    font-size: 14px;
    border-radius: 5px;

    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
    gap: 0 5px;
    margin-bottom: 16px;

    .ant-input {
      background-color: unset;
      border: none !important;
      height: unset;
      outline: unset;
      box-shadow: unset;
      border-radius: unset;
      text-align: left;
      direction: ltr;
      padding-left: unset;
      padding-right: unset;
      padding-top: unset;
    }

    label {
      position: unset;
      color: ${(props) => props.theme.colors.gray1};
      font-size: 16px;
      line-height: 24px;

      .req-sign {
        color: ${(props) => props.theme.colors.red};
      }
    }

    .custom-dropdown {
      border: none;
      padding: 0;
      .custom-dropdown-selected-text {
        color: ${(props) => props.theme.colors.gray12};
        font-size: 14px;
        line-height: 24px;
      }

      .custom-dropdown-menu {
        top: 40px;
        right: -17px;
      }
    }
  }
`;

export const ShowPasswordBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  outline: none;
  position: absolute;
  right: 13px;
  top: 44px;

  color: ${(props) => props.theme.colors.gray3};

  &:focus {
    outline: none;
  }
`;

export const TextEditorWrapper = styled.div`
  .quill {
    .ql-toolbar {
      width: 760px;
    }
    .ql-container.ql-snow {
      height: 280px !important;
      min-height: 280px;
      max-width: 760px !important;
      width: 760px !important;
    }
    .ql-editor {
      color: #000 !important;
    }
  }
`;
