import Image from 'next/image';
import * as Styled from './styled';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import { useRouter } from 'next/router';

const SearchArea = () => {
  const { replace, pathname, query, isReady } = useRouter();
  const [keyword, setKeyword] = useState('');
  const debounceKeyword = useDebounce({ value: keyword, delay: 300 });

  const onChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      setKeyword(e.currentTarget.value);
    },
    [setKeyword],
  );
  useEffect(() => {
    if (isReady) {
      if (typeof query.keyword === 'string') {
        setKeyword(query.keyword);
      }
    }
  }, [isReady]);

  useEffect(() => {
    if (isReady) {
      if (debounceKeyword) {
        replace({ pathname, query: { ...query, keyword: debounceKeyword } });
      } else {
        delete query.keyword;
        replace({ pathname, query: { ...query } });
      }
    }
  }, [debounceKeyword, isReady]);

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
