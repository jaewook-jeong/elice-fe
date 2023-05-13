import Image from 'next/image';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import debounce from 'lodash.debounce';

import * as Styled from './styled';

const SearchArea = () => {
  const { replace, pathname, query, isReady } = useRouter();
  const [keyword, setKeyword] = useState('');

  const debounceQuery = useCallback(
    debounce((nextKeyword) => {
      if (nextKeyword) {
        replace({ pathname, query: { ...query, keyword: nextKeyword } });
      } else {
        delete query.keyword;
        replace({ pathname, query: { ...query } });
      }
    }, 300),
    [],
  );

  const onChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setKeyword(value);
    debounceQuery(value);
  }, []);

  useEffect(() => {
    if (isReady) {
      if (typeof query.keyword === 'string') {
        setKeyword(query.keyword);
      }
    }
  }, [isReady]);

  return (
    <Styled.Wrapper>
      <Styled.IconBox>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/16px-Search_Icon.svg.png"
          width={16}
          height={16}
          alt="search icon"
        />
      </Styled.IconBox>
      <Styled.Input
        value={keyword}
        placeholder="배우고 싶은 언어, 기술을 검색해보세요"
        onChange={onChange}
      />
    </Styled.Wrapper>
  );
};

export default SearchArea;
