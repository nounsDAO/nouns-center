'use client';

import Link from 'next/link';
import React from 'react';
import { BiLinkExternal as ExternalIcon } from 'react-icons/bi';
import { Disclosure } from '@headlessui/react';
import navigationData from './navigation.json';
import { CategoriesWithResources } from '@/actions/getCategoriesAndResources';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Mobile = ({
  categoriesWithResources,
}: {
  categoriesWithResources: CategoriesWithResources;
}) => {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="pt-2 px-4 pb-3 space-y-1">
        <Disclosure.Panel>
          {({ close }) => (
            <div>
              {categoriesWithResources.map(category => (
                <Disclosure as="div" defaultOpen key={category.id} className="space-y-1 mb-4">
                  {({ open: open2 }) => (
                    <>
                      <Disclosure.Button
                        as="button"
                        className={classNames(
                          'text-black focus:outline-hidden',
                          'group w-full flex items-center text-nouns tracking-wide text-left xs:text-lg sm:text-lg font-medium rounded-md focus:outline-hidden transition duration-150',
                        )}
                      >
                        <svg
                          className={classNames(
                            open2 ? 'text-black rotate-90' : 'text-black',
                            'shrink-0 h-5 w-5 transform group-hover:text-blue-base transition duration-150',
                          )}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                        </svg>

                        <span className="flex-1 text-xl">{category.label}</span>
                      </Disclosure.Button>

                      <Disclosure.Panel className="space-y-1">
                        {category.resources.map(resource => (
                          <div
                            onClick={() => close()}
                            key={resource?.id}
                            className="flex ml-3 px-1 items-center rounded-md"
                          >
                            {resource?.__typename === 'ResourceLink' && resource.isExternal ? (
                              <Disclosure.Button
                                as="a"
                                href={resource.link}
                                target="_blank"
                                rel="noreferrer"
                                className="focus:outline-hidden group w-full flex items-center pr-2 pl-2 py-0.5 text-sm font-medium text-nouns-black hover:text-blue-base gap-1"
                              >
                                {resource.title}

                                <ExternalIcon />
                              </Disclosure.Button>
                            ) : (
                              <Link
                                href={resource.link!}
                                className="focus:outline-hidden group w-full flex items-center pr-2 pl-2 py-0.5 text-sm font-medium text-nouns-black hover:text-blue-base "
                              >
                                {resource?.title}
                              </Link>
                            )}
                          </div>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          )}
        </Disclosure.Panel>
      </div>
    </Disclosure.Panel>
  );
};

export default Mobile;
