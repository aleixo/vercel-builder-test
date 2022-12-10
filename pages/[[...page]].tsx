import {BuilderComponent, builder, useIsPreviewing} from '@builder.io/react';
import React from 'react';
import dynamic from 'next/dynamic';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';

import {bolttechTheme} from "@edirect/frontend-foundations";
import { registerComponents } from "../src/components";
const BolttechThemeProvider = dynamic(() => import('@edirect/frontend-foundations/dist/style/BolttechThemeProvider'), { ssr: false });

// Replace with your Public API Key
builder.init('4127d518307543219fa05d4420cbece1');
registerComponents();

export async function getStaticProps({ params }: { params: { page: string[]; } }) {
  // Fetch the builder content
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/' + (params?.page?.join('/') || ''),
      },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5
  };
}

export async function getStaticPaths() {
  // Get a list of all pages in builder
  const pages = await builder.getAll('page', {
    // We only need the URL field
    fields: 'data.url',
    options: { noTargeting: true },
  });

  return {
    paths: pages.map(page => `${page.data?.url}`),
    fallback: true,
  };
}

export default function Page({ page }: { page: { data: Record<string, string> } }) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{page?.data.title}</title>
      </Head>
      {/* Render the Builder page */}
      <BolttechThemeProvider theme={bolttechTheme}>
        <BuilderComponent model="page" content={page} />
      </BolttechThemeProvider>
    </>
  );
}
