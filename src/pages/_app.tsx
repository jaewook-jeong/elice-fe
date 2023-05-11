import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CLASS가 다르다, 엘리스 아카데미</title>
        <meta
          name="description"
          content="디지털 교육 실습 플랫폼 엘리스 아카데미에서 클래스가 다른 학습을 경험해보세요!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
