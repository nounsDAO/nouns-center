/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Footer from '../Footer';
import NavSection from './NavSection';
import NavCard from './NavCard';
import { getCategoriesAndResources } from '@/actions/getCategoriesAndResources';

const Hero = async () => {
  const categoriesWithResources = await getCategoriesAndResources();
  return (
    <>
      <div className="pt-10">
        <main className="mx-auto tracking-wider text-black xs:px-4">
          <div className="text-center flex flex-col justify-between h-full pb-5 sm:pb-10">
            <img className="m-auto mt-5 w-1/3 sm:w-52	 " src="/home/noggles.png" alt="noggles" />
            <h1 className="font-extrabold text-3xl sm:text-5xl md:text-[80px] text-nouns tracking-wider w-full xs:pt-6 sm:pt-12 xs:pb-3 sm:pb-6">
              Welcome to Nouns Center
            </h1>
            <p className="text-black m-auto font-semibold xs:text-[14px] sm:text-2xl text-center w-full sm:w-[800px]">
              The knowledge center &#38; resource hub for Nouns DAO. Learn about the project, the
              community and ways to get involved and funded.
            </p>

            {/* <div className="mt-6 sm:mb-14" id="autocomplete"></div> */}
          </div>

          {categoriesWithResources.map((category, i) => (
            <NavSection
              key={category.id}
              // @ts-ignore
              title={category.title}
              // @ts-ignore
              body={category.description}
              cards={category.resources.map((resource, j) => (
                <NavCard
                  path={resource.link!}
                  key={resource?.id}
                  text={resource!.title}
                  i={10 * i + j}
                />
              ))}
            />
          ))}
        </main>
      </div>
    </>
  );
};

export default Hero;
