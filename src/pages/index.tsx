import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import { makeQueryArray } from '@/utils/query';
import { CoursesResponse } from '@/types/course';
import Layout from '@/components/Layout';
import { SearchArea, Filter } from '@/features/PA';

export default function Home() {
  const { query, isReady } = useRouter();

  const [offset, setOffset] = useState(0);
  const title = query.keyword;
  const price = makeQueryArray(query.price).join(',');

  const { data, isLoading } = useQuery<CoursesResponse>(['courseList', price, title, offset], {
    queryFn: () => axios.get(`/api/courseList?price=${price}&title=${title}&offset=${offset}`),
    enabled: isReady,
  });

  return (
    <Layout>
      <SearchArea />
      <Filter />
    </Layout>
  );
}
