import React from 'react';
import { useRouter } from 'next/router';
import Divider from '../Divider';
import Footer from '../Footer';

const PageContent = ({ children }) => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <div className="xs:py-6 xs:px-6 xl:px-0 sm:py-6 bg-grey-lightest">
      {children}

      {asPath !== '/' && (
        <>
          <Divider />

          <Footer />
        </>
      )}
    </div>
  );
};

export default PageContent;
