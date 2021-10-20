import styled from 'styled-components';

export default styled.section`
  label {
    font-weight: 400;
  }

  &.input {
    /* margin-bottom: 16px; */
    position: relative;
    color: #151515;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.01em;

    &.hasValue,
    &:focus-within {
      label {
        top: 8px;
        font-size: 14px;
      }
    }

    &:focus-within {
      .ant-input {
        border: 1px solid #a0a0a0;
      }
    }

    &.hasError {
      .ant-input {
        border: 1px solid #f46565;
      }

      label {
        color: #f46565;
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
    border: 1px solid #e1e1e1;
    height: 56px;
    border-radius: 16px;
    outline: none;
    color: #151515;
    box-shadow: #fff 0 100px 0 inset;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.01em;
    padding: 16px 16px 3px 16px;
    -webkit-appearance: none;
  }

  label {
    color: #a0a0a0;
    line-height: 1;
    position: absolute;
    bottom: 10px;
    transition: all ease 0.2s;
    z-index: 1;
    font-size: 16px;
    line-height: 140%;
    left: 16px;
    top: 17px;
    pointer-events: none;

    .req-sign {
      color: #ff2b36;
    }
  }

  .text-danger {
    position: absolute;
    left: 19px;
    bottom: -22px;
    border-radius: 8px;
    z-index: 1;

    .text-danger--text {
      color: #ff2b36;
      font-size: 14px;
      font-weight: 400;
    }

    &.field-error {
      width: 100%;
    }
  }

  &.text-input {
    &.textarea {
      textarea {
        width: 100%;
        height: 120px;
        resize: none;
        padding-top: 15px;
      }

      label {
        bottom: 92px;
      }

      &.hasValue,
      &:focus-within {
        label {
          bottom: 110px;
        }
      }
    }

    .input-desc {
      font-size: 14px;
      line-height: 140%;
      letter-spacing: -0.02em;
      color: #151515;
      margin-top: 4px;
      padding-left: 16px;
      font-weight: 400;
    }
  }

  /***************************** [ Datepicker Input ] *****************************/
  &.datepicker {
    padding: 17px 11px 4px;
    border: 1px solid #e1e1e1;

    &:focus-within {
      border-color: #edbf65;
    }

    .ant-picker {
      width: 100%;
      border: 0;
      margin: 0 !important;
      padding: 0;
      box-shadow: none !important;
      outline: none !important;
      padding-bottom: 5px;
      padding-top: 5px;

      &:focus-within {
        & ~ .labelText {
          font-size: 14px;
          top: 6px;
        }
      }
    }

    .ant-calendar-picker {
      .ant-calendar-picker-input {
        box-shadow: none !important;
        outline: none;
      }
    }

    .ant-calendar-picker-input {
      padding-left: 0 !important;
      padding-right: 0;
    }

    .ant-calendar-picker-icon {
      color: #c6c6e9;
      @media only screen and (max-width: 400px) {
        right: 7px;
      }
    }

    .ant-calendar-range-picker-separator {
      color: #c6c6e9;
    }

    .ant-calendar-disabled-cell {
      .ant-calendar-date {
        background-color: transparent;
        opacity: 0.5;
      }
    }
  }

  /***************************** [ Select Input ] *****************************/
  &.select-input {
    .ant-select {
      min-height: 56px;
      width: 100%;

      .ant-select-selector {
        min-height: 56px;
        outline: none;
        box-shadow: none;
        border: none;
        border-radius: 16px;
        background-color: transparent;
        border: 1px solid #e1e1e1;
        box-shadow: none !important;
        padding: 20px 16px 3px 16px;

        .ant-select-selection-search-input {
          min-height: 56px;
          padding-left: 5px;
          padding-top: 12px;
        }

        .ant-select-selection-placeholder {
          line-height: 56px;
        }

        .ant-select-selection-item {
          color: #151515;
          font-weight: 600;
          font-size: 16px;
        }
      }

      .ant-select-arrow {
        top: 22px;
        width: 24px;
        height: 24px;
        background: url(/assets/images/chevron-down-icon.svg) no-repeat center
          center;
        transition: all ease-in-out 0.2s;

        .anticon {
          display: none;
        }
      }

      &.ant-select-open {
        .ant-select-arrow {
          transform: rotate(180deg);
        }
      }

      &.ant-select-focused {
        .ant-select-selector {
          border: 1px solid #a0a0a0;
        }
      }
    }

    .ant-select-multiple {
      .ant-select-selection-item {
        line-height: 20px !important;
        margin-bottom: 0 !important;
        margin-top: 0 !important;
      }
    }

    &.disabled {
      label {
        color: #6f788b;
      }

      .ant-select-selection-item {
        color: #6f788b !important;
      }
    }

    &.hasError {
      .ant-select-selector {
        border: 1px solid #f46565;
      }
    }
  }

  /***************************** [ Checkbox Input ] **************************/
  &.checkbox-input {
    min-height: 23px;

    label {
      pointer-events: all;
    }

    .ant-checkbox-wrapper {
      top: 0 !important;
      font-size: 16px !important;
      left: 0;

      .ant-checkbox {
        display: inline-block;
        vertical-align: top;

        .ant-checkbox-inner {
          width: 24px;
          height: 24px;
          border-radius: 8px;
          border: 1px solid #a0a0a0;
          background-color: transparent;

          &:after {
            background: url(/assets/images/check-white-icon.svg) no-repeat
              center center;
            width: 16px;
            height: 16px;
            content: '';
            border: 0;
            transform: none;
            top: 3px;
            margin: auto;
            display: block;
            left: 3px;
          }
        }

        &:after {
          display: none;
        }
      }

      &.ant-checkbox-wrapper-checked {
        .ant-checkbox {
          .ant-checkbox-inner {
            border-color: #1a73e8;
            background-color: #1a73e8;
          }
        }
      }

      span {
        &:last-child {
          display: inline-block;
          vertical-align: top;
          color: #151515;
          top: 0 !important;
          font-size: 16px !important;
          letter-spacing: -0.01em;
          line-height: 22.4px;
          font-style: normal;
        }
      }
    }

    &.group {
      & > label {
        position: relative;
        display: block;
        margin-bottom: 25px;
        bottom: 0;
        font-size: 16px;
        left: 0;
      }

      .ant-checkbox-group {
        .ant-checkbox-wrapper {
          position: relative;
          width: 100%;
          margin-bottom: 10px;
          left: 0;

          & > span {
            &:last-child {
              font-size: 14px;
              top: 3px;
              position: relative;
            }
          }
        }
      }
    }
  }

  /***************************** [ Radio Input ] **************************/
  &.radio-input {
    & > label {
      position: initial;
      display: block;
      margin-bottom: 5px;
      top: 0 !important;
      font-size: 16px !important;
      left: 0;
      pointer-events: all;
    }

    .ant-radio-wrapper {
      position: initial;
      top: 0 !important;
      font-size: 16px !important;
      left: 0;

      .ant-radio {
        border-radius: 50%;
        vertical-align: middle;

        .ant-radio-inner {
          border: 1px solid #a0a0a0;
          width: 24px;
          height: 24px;
          display: inline-block;
          vertical-align: middle;
          top: 0;

          &::after {
            background: url(/assets/images/check-white-icon.svg) no-repeat
              center center;
            width: 16px;
            height: 16px;
            content: '';
            border: 0;
            transform: none;
            top: 3px;
            margin: auto;
            display: block;
            left: 3px;
          }
        }
      }

      &.ant-radio-wrapper-checked {
        .ant-radio {
          .ant-radio-inner {
            border-color: #1a73e8;
            background-color: #1a73e8;
          }
        }
      }

      span {
        &:last-child {
          color: #151515;
          font-size: 16px !important;
          letter-spacing: -0.01em;
          line-height: 22.4px;
          font-style: normal;
        }
      }
    }
  }

  /***************************** [ Switch Input ] **************************/
  &.switch-input {
    & > label {
      display: inline-block;
      position: relative;
      left: 0;
      bottom: 0 !important;
      margin-bottom: 0;
      margin-right: 15px;
      vertical-align: middle;
      font-size: 16px !important;
      pointer-events: all;
    }

    .ant-switch-checked {
      background-color: #eebf65;

      .ant-switch-inner {
        color: #333;
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
    height: 1em;
  }
  .PhoneInputCountryIcon--square {
    width: 1em;
  }
  .PhoneInputCountryIcon--border {
    background-color: rgba(0, 0, 0, 0.1);
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
      top: 6px;
      font-size: 16px;

      &.selectLabel {
        color: ${({ theme }) => theme.colors.gray600} !important;
      }

      &.phoneLabel {
        padding-left: 152px;
        top: 18px;
      }
    }

    &:focus-within,
    &.hasValue {
      label {
        top: 8px;
      }
    }

    input {
      padding-left: 168px !important;
    }

    .input-desc {
      font-size: 14px;
      line-height: 140%;
      letter-spacing: -0.02em;
      color: #151515;
      margin-top: 4px;
      padding-left: 16px;
      font-weight: 400;
      margin-bottom: 0;
    }

    .ant-select {
      width: 152px;
      position: absolute;
      height: 56px;

      .ant-select-selector {
        height: 100%;
        border: 1px solid #e1e1e1;
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
        padding: 0 16px !important;
      }

      &.ant-select-focused {
        .ant-select-selector {
          outline: none;
          border: 1px solid ${({ theme }) => theme.colors.gray600};
          box-shadow: none;
        }
      }

      .ant-select-selection-item {
        line-height: 72px;
        padding-right: 0;
        font-size: 16px !important;
      }
    }

    .text-danger {
      left: 171px !important;
      bottom: -26px;
    }

    .PhoneInput {
      display: block;
      align-items: center;
      height: 50px;
      border: 0;

      .PhoneInputCountry {
        position: absolute;
        left: 12px;
        bottom: 17px;
        display: none;
      }

      .PhoneInputInput {
        width: 100%;

        border: 1px solid #e1e1e1;
        height: 56px;
        border-radius: 16px;
        outline: none;
        color: #151515;
        box-shadow: #fff 0 100px 0 inset;
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        letter-spacing: -0.01em;
        padding: 20px 16px 0 16px;
      }
    }
  }

  /***************************** [ Upload Input ] **************************/
  &.upload-input {
    label {
      position: inherit !important;
      bottom: 0 !important;
      font-size: 16px !important;
    }

    .upload--area {
      width: 100%;
      height: 200px;
      padding: 0;
      background-color: #fff;
      border-radius: 10px;
      border: 1px dashed #ccc;
      overflow: hidden;

      .loading {
        position: relative;
        z-index: 1;
      }

      input {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        outline: none;
        cursor: pointer;
        opacity: 0;
        z-index: 1;
      }

      .image--source {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        bottom: 0;
        margin: auto;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .images--list {
      margin-left: -5px;
      margin-right: -5px;
      margin-top: 10px;
      display: flex;
      overflow: auto;
      height: 240px;
      padding-top: 14px;

      .list--innerbox {
        padding: 5px;
        width: 160px !important;
        position: relative;
        float: left;
        flex: none;

        .remove-image {
          top: -3px !important;
          background: #ff0047ad;
          color: #fff;
        }

        .list--item {
          width: 100%;
          height: 140px;
          display: inline-block;
          overflow: hidden;
          border-radius: 15px;
          background-color: #f1f1fd;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .set--primary {
          width: 100%;

          .ant-btn {
            width: 100%;
            background-color: transparent;
            color: #333;
            border: 0;
            padding: 0;
            height: 30px;
            text-align: left;
            box-shadow: none;

            &::after {
              display: none;
            }

            .checkbox {
              width: 30px;
              height: 30px;
              border: 1px solid #b8bbdc;
              border-radius: 50%;
              display: inline-block;
              vertical-align: middle;
              margin-right: 10px;
              transition: all ease-in-out 0.2s;

              &:after {
                background: url(/assets/images/check-white-icon.png) no-repeat
                  center center;
                width: 13px;
                height: 10px;
                content: '';
                border: 0;
                transform: none;
                top: 9px;
                margin: auto;
                display: block;
                left: 7px;
                position: absolute;
              }
            }

            &.is-primary {
              .checkbox {
                border-color: #eebf65;
                background-color: #eebf65;
              }
            }

            &.disabled {
              opacity: 0.4;
            }
          }
        }
      }
    }
  }

  /***************************** [ Range Picker Input ] **************************/
  &.range-picker-input {
    label {
      position: inherit !important;
      bottom: 0 !important;
      font-size: 16px !important;
      display: block;
      margin-bottom: 5px;
    }

    .ant-picker {
      height: 50px;
      width: 100%;
      border: 0;
      border: 1px solid #e1e1e1;
      outline: none;
      box-shadow: none;
    }
  }
  .remove-image {
    background: #f8004519;
    border: none;
    color: #f80045;
    width: 30px;
    /* line-height: 26px; */
    height: 30px;
    border-radius: 50%;
    padding: 5px;
    position: absolute;
    z-index: 999;
    right: 0;
    top: 8px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;
