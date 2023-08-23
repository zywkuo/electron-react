import SearchFile from '@/components/SearchFile';
import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import React from 'react';

const Home: React.FC = () => {
  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage: 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <SearchFile
          title="我的文档"
          onSearch={(value) => {
            console.log(value);
          }}
        ></SearchFile>
      </Card>
    </PageContainer>
  );
};

export default Home;
