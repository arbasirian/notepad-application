import React from 'react';
import { Layout } from 'antd';

import { Box, ErrorBoundary } from 'components';

const { Sider, Content } = Layout;

type Props = {
  children: any;
};

const MainLayout = ({ children }: Props) => {
  return (
    <Layout>
      <Content>
        <Box>
          <ErrorBoundary>{children}</ErrorBoundary>
        </Box>
      </Content>
    </Layout>
  );
};

export default MainLayout;
