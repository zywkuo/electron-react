import FileList from '@/components/FileList';
import SearchFile from '@/components/SearchFile';
import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import React from 'react';

const Home: React.FC = () => {
  const initFiles: any = [
    {
      id: '1',
      title: '文件1',
      body: '## 文件1内容',
      createTime: '123123',
    },
    {
      id: '2',
      title: '文件2',
      body: '## 文件2内容',
      createTime: '123123',
    },
    {
      id: '3',
      title: '文件3',
      body: '## 文件3内容',
      createTime: '123123',
    },
  ];
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
        <h3>SearchFile</h3>
        <SearchFile
          title="我的文档"
          onSearch={(value: any) => {
            console.log(value);
          }}
        />

        <h3>FileList</h3>
        <FileList files={initFiles} />
      </Card>
    </PageContainer>
  );
};

export default Home;
