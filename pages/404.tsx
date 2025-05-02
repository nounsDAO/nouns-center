/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Header from '../components/Header';
import PageContent from '../components/Layout/PageContent';
import PageHeader from '../components/Layout/PageHeader';

const Custom404 = () => {
  return (
    <>
      <PageHeader>
        <Header title="404 | Nouns Center" />
        {/* <Title title="404: Page Not Found" /> */}
      </PageHeader>

      <PageContent>
        <h1 className="text-nouns flex items-center justify-center">404: Page Not Found</h1>
      </PageContent>
    </>
  );
};

export default Custom404;
