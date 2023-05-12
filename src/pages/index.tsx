import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import { makeQueryArray } from '@/utils/query';
import { CoursesResponse } from '@/types/course';
import Layout from '@/components/Layout';
import { SearchArea, Filter } from '@/features/PA';
import Courses from '@/features/PA/Courses';

export default function Home() {
  const { query, isReady } = useRouter();

  const [offset, setOffset] = useState(0);
  const title = query.keyword;
  const price = makeQueryArray(query.price).join(',');

  const { data, isLoading } = useQuery(['courseList', price, title, offset], {
    queryFn: () =>
      axios.get<CoursesResponse>(`/api/courseList?price=${price}&title=${title}&offset=${offset}`),
    enabled: isReady,
    select: (data) => data.data,
  });

  return (
    <Layout>
      <SearchArea />
      <Filter />
      {data?.courses && <Courses courses={data.courses} />}
    </Layout>
  );
}
