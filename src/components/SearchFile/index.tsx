/* eslint-disable react/button-has-type */
import { CloseCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Fragment, useEffect, useRef, useState } from 'react';
import styles from './index.less';

const SearchFile = ({ title, onSearch }) => {
  const [searchAvtive, setSearchActive] = useState(false);
  const [value, setValue] = useState('');

  const oInput = useRef(null);

  const closeSearch = () => {
    setSearchActive(false);
    setValue('');
  };

  useEffect(() => {
    const searchHandle = (e) => {
      const { keyCode } = e;
      if (keyCode == 13 && searchAvtive) {
        onSearch(value);
      }

      if (keyCode == 27 && searchAvtive) {
        closeSearch();
      }
    };
    document.addEventListener('keyup', searchHandle);
    return () => {
      document.removeEventListener('keyup', searchHandle);
    };
  });

  useEffect(() => {
    if (searchAvtive) {
      oInput.current.focus();
    }
  }, [searchAvtive]);

  return (
    <Fragment>
      {searchAvtive ? (
        <>
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            ref={oInput}
          />
          <CloseCircleOutlined
            className={styles.searchBtn}
            onClick={() => {
              closeSearch();
            }}
          />
          {/* <button
            className={styles.searchBtn}
            onClick={() => {
              closeSearch();
            }}
          >
            关闭
          </button> */}
        </>
      ) : (
        <>
          <div>
            <span>{title}</span>
            <SearchOutlined
              className={styles.searchBtn}
              onClick={() => {
                setSearchActive(true);
              }}
            />
            {/* <button
              className={styles.searchBtn}
              onClick={() => {
                setSearchActive(true);
              }}
            >
              搜索
            </button> */}
          </div>
        </>
      )}
    </Fragment>
  );
};

export default SearchFile;
