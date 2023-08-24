/* eslint-disable react/button-has-type */
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Fragment } from 'react';

const FileList = ({ files, editFile, saveFile, deleteFile }) => {
  return (
    <Fragment>
      <ul>
        {files.map((item) => {
          return (
            <>
              <li key={item.id}>
                {item.title}
                <span style={{ marginLeft: 10 }}>
                  <EditOutlined />
                </span>
                <span style={{ marginLeft: 10 }}>
                  <DeleteOutlined />
                </span>
              </li>
            </>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default FileList;
