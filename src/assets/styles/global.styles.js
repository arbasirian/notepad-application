import styled, { createGlobalStyle, css } from 'styled-components';

export const BodyStyles = css`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .has-cursor {
    cursor: pointer;
  }
  .name-icon {
    background-color: #ff9458;
    padding: 10px;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.white};
    margin-right: 5px;
    width: 40px;
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
  }
  .provider-name {
    background: transparent !important;
    text-decoration-line: underline;
    letter-spacing: 0.02em;
  }
  .ant-picker-time-panel-column {
    &::-webkit-scrollbar {
      width: 5px;
    }
    overflow-y: auto;

    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #5a8dee;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #c5cad2;
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #c5cad2;
    }
  }
`;

export const AntLayouts = css`
  .ant-layout {
    min-height: 100vh;
  }
  .ant-layout-header {
    background: ${({ theme }) => theme.colors.primary};
    height: auto;
    padding: 12px;
    line-height: 56px;
  }

  .ant-menu-item .ant-menu-item-icon,
  .ant-menu-submenu-title .ant-menu-item-icon,
  .ant-menu-item .anticon,
  .ant-menu-submenu-title .anticon {
    width: 22px;
    height: 22px;
    font-size: 22px;
    margin-right: 17px;
  }
  .ant-layout-sider
    .ant-layout-sider-children
    .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
    .ant-menu-item-selected {
    background: linear-gradient(
      90deg,
      rgba(256, 256, 256, 0.3) 0%,
      rgba(90, 141, 238, 0) 100%
    );
    border-right: 4px solid;
  }
  .ant-layout-content {
    overflow: hidden;
    background: ${(props) => props.theme.colors.gray4};
    .ant-tabs {
      color: ${(props) => props.theme.colors.gray1};
      width: 100%;

      .ant-tabs-tab .anticon {
        margin: 3px !important;
      }
      .ant-tabs-nav {
        background-color: ${(props) => props.theme.colors.white} !important;
        justify-content: flex-start;
        margin: 0 !important;

        .ant-tabs-nav-wrap {
          flex: unset !important;
          .ant-tabs-nav-list {
            padding: 5px;
            svg {
              margin: 0 3px !important;
            }
          }
        }
        .ant-tabs-tab {
          font-size: 13px !important;
          padding: 10px !important;
          font-weight: 700;
          color: ${({ theme }) => theme.colors.gray1};

          max-width: 9rem;
          &.ant-tabs-tab-active {
            .ant-tabs-tab-btn {
              color: ${({ theme }) => theme.colors.primary};
              svg {
                color: ${({ theme }) => theme.colors.primary};
              }
            }
          }
        }
      }
    }

    .ant-pagination-item-link {
      color: ${({ theme }) => theme.colors.black2};
      border: 0 !important;
    }
    .ant-pagination-item-active a {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  }
  .ant-tag-geekblue {
    color: #07a287;
    background: #f1fbee;
    border-color: transparent;
    padding: 5px 10px;
    border-radius: 8px;
    font-size: 13px;
  }
  .ant-tag-volcano {
    color: #fc4d4c;
    background: #ffeded;
    border-color: transparent;
    border: none;
    padding: 5px 10px;
    margin: 0 0 5px 0px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;
    height: 32px;
  }
  .ant-tag-green {
    color: #6fd456;
    background: #f1fbee;
    border-color: transparent;
    border: none;
    padding: 5px 10px;
    margin: 0 0 5px 0px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;

    height: 32px;
  }
  .ant-tag-blue {
    color: #5a8dee;
    background: #f2f6fe;
    border-color: transparent;
    border: none;
    padding: 5px 10px;
    margin: 0 0 5px 0px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;

    height: 32px;
  }
  .ant-tag-orange {
    color: #f9c91f;
    background: #fff7dd;
    border-color: transparent;
    border: none;
    padding: 5px 10px;
    margin: 0 0 5px 0px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;

    height: 32px;
  }
  .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    padding-right: 0 !important;
  }
`;

export const AntModal = css`
  .ant-modal {
    margin: 0 auto;
    .ant-modal-header {
      border-bottom: none;
      .ant-modal-title {
        font-weight: 700;
        color: #000;
        font-size: 18px;
      }
    }
    .ant-modal-content {
      border-radius: 15px;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 5px;
      }
      overflow-y: auto;

      /* Track */
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #f5f5f5;
        border-radius: 10px;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #c5cad2;
        border-radius: 10px;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #c5cad2;
      }
    }
  }
`;
export const FlexProp = css`
  .flex-1 {
    flex: 1;
  }
  .flex-2 {
    flex: 2;
  }
  .flex-3 {
    flex: 3;
  }
  .flex-4 {
    flex: 4;
  }
  .flex-5 {
    flex: 5;
  }
`;
export const Body = css`
  html,
  body {
    &::-webkit-scrollbar {
      width: 5px;
    }
    overflow-y: auto;

    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #f5f5f5;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #c5cad2;
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #c5cad2;
    }
  }
`;

export const DesignedScroll = css`
  .designed-scroll {
    &::-webkit-scrollbar {
      width: 5px;
    }
    overflow-y: auto;

    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #f5f5f5;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #c5cad2;
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #c5cad2;
    }
  }
  .designed-scroll-horizontal {
    overflow-x: auto;
    padding-bottom: 10px;
    &::-webkit-scrollbar {
      height: 7px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #f5f5f5;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default createGlobalStyle`
  ${BodyStyles};
  ${AntLayouts};
  ${AntModal};
  ${FlexProp};
  ${Body};
  ${DesignedScroll};
`;
