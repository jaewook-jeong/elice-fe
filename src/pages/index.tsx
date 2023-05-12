import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import { makeQueryArray } from '@/utils/query';
import { CoursesResponse } from '@/types/course';
import Layout from '@/components/Layout';
import { SearchArea, Filter } from '@/features/PA';
import Courses from '@/features/PA/Courses';
import Pagination from '@/components/Pagination';
import { makeFilterConditions, makePriceQuery } from '@/utils/makeQueryString';
import StatusImage from '@/components/StatusImage';

const COUNT_PER_PAGE = 20;

export default function Home() {
  const { query, isReady } = useRouter();
  const courseRef = useRef<HTMLDivElement | null>(null);

  const [offset, setOffset] = useState(0);
  const title = query.keyword as string;

  const price = makePriceQuery(makeQueryArray(query.price));
  const filter_conditions = makeFilterConditions(title, price);

  const { data, status } = useQuery(['courseList', price, title, offset], {
    queryFn: () =>
      axios.post<CoursesResponse>(`/api/courseList`, {
        endpoint: `https://api-rest.elice.io/org/academy/course/list?filter_conditions=${filter_conditions}&offset=${offset}&count=20`,
      }),
    enabled: isReady,
    select: (data) => data.data,
    onSuccess: () => courseRef.current?.scrollIntoView(),
    useErrorBoundary: false,
  });

  return (
    <Layout>
      <SearchArea />
      <Filter initOffset={() => setOffset(0)} />

      <div ref={courseRef}>
        {status === 'error' && isReady && <StatusImage text="에러가 발생했습니다." />}
        {status === 'success' && (
          <>
            {data?.courses && <Courses courses={data.courses} />}
            {data?.count ? (
              <Pagination
                page={Math.floor(offset / 20) + 1}
                totalDataCount={data.count}
                onChangePage={(page) => setOffset((page - 1) * COUNT_PER_PAGE)}
              />
            ) : (
              <StatusImage text="검색 결과가 없습니다." />
            )}
          </>
        )}
      </div>
    </Layout>
  );
}
