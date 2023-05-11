import Layout from '@/components/Layout';
import { SearchArea, Filter } from '@/features/PA';

export default function Home() {
  return (
    <Layout>
      <SearchArea />
      <Filter />
    </Layout>
  );
}
