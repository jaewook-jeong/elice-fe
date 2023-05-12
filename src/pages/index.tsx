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

const COUNT_PER_PAGE = 20;

export default function Home() {
  const { query, isReady } = useRouter();
  const courseRef = useRef<HTMLDivElement | null>(null);

  const [offset, setOffset] = useState(0);
  const title = query.keyword;
  const price = makeQueryArray(query.price).join(',');

  const { data, isLoading } = useQuery(['courseList', price, title, offset], {
    queryFn: () =>
      axios.get<CoursesResponse>(`/api/courseList?price=${price}&title=${title}&offset=${offset}`),
    enabled: isReady,
    select: (data) => data.data,
    keepPreviousData: true,
    onSuccess: () => courseRef.current?.scrollIntoView(),
  });

  return (
    <Layout>
      <SearchArea />
      <Filter initOffset={() => setOffset(0)} />
      <div ref={courseRef}>
        {data?.courses && <Courses courses={data.courses} />}
        {data?.count && (
          <Pagination
            page={Math.floor(offset / 20) + 1}
            totalDataCount={data.count}
            onChangePage={(page) => setOffset((page - 1) * 20)}
          />
        )}
      </div>
    </Layout>
  );
}
