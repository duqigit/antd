import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  test1: string;
  test2: string;
  test3: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    align: 'left',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    align: 'left',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
  {
    title: 'test1',
    dataIndex: 'test1',
    key: 'test1',
  },
  {
    title: 'test2',
    dataIndex: 'test2',
    key: 'test2',
  },
  {
    title: 'test3',
    dataIndex: 'test3',
    key: 'test3',
    fixed: 'right',
    width: 120,
    render: () => <a>操作</a>,
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    test1: 'test1',
    test2: 'test2',
    test3: 'test3',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    test1: 'test1',
    test2: 'test2',
    test3: 'test3',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    test1: 'test1',
    test2: 'test2',
    test3: 'test3',
  },
];

const App: React.FC = () => (
  <Table align="center" scroll={{ x: 1500 }} columns={columns} dataSource={data} />
);

export default App;
