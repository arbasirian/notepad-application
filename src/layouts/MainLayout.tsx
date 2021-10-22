import React from 'react';
import { Layout } from 'antd';

import { Box, Container, ErrorBoundary, Title1 } from 'components';

const { Sider, Content } = Layout;

type Props = {
  children: any;
};

const MainLayout = ({ children }: Props) => {
  return (
    <Layout>
      <Content>
        <Container>
          <Title1 padding="30px 24px" paddingM="30px 24px">
            Notepad Application
          </Title1>
          <Box
            border="2.6px solid"
            borderColor="gray3"
            padding="30px"
            minHeight="85vh"
            borderRadius="10px"
            background="white"
            marginBottom="30px"
          >
            <ErrorBoundary>{children}</ErrorBoundary>
          </Box>
        </Container>
      </Content>
    </Layout>
  );
};

export default MainLayout;
