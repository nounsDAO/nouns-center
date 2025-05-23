'use client';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Button from '../common/Button';
import MobileNavigation from './Mobile';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { BiLinkExternal as ExternalIcon } from 'react-icons/bi';
import Link from 'next/link';
import { CategoriesWithResources } from '@/actions/getCategoriesAndResources';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Web = ({ categoriesWithResources }: { categoriesWithResources: CategoriesWithResources }) => {
  return (
    <>
      <Disclosure
        as="nav"
        defaultOpen={false}
        className="bg-white shadow-sm sm:sticky sm:top-0 sm:z-10	"
      >
        {({ open, close }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
              <div className="flex justify-between h-16">
                {/* MOBILE EXPAND ICON */}
                <div className="flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="shrink-0 flex items-center cursor-pointer" onClick={() => close()}>
                  <Link passHref href="/" onClick={() => close()}>
                    <img className="block h-10 w-auto" src="/earth.gif" alt="Workflow" />
                  </Link>
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden md:ml-6 sm:flex md:space-x-8 gap-4">
                  {categoriesWithResources.map(category => (
                    <Menu
                      as="div"
                      className="relative flex text-left hover:text-blue-base"
                      key={category.id}
                    >
                      <Menu.Button className="inline-flex justify-center items-center h-full m-auto">
                        {category.label}
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                      </Menu.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-12	w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-hidden">
                          <div className="py-1">
                            {category.resources.map(resource => (
                              <Menu.Item key={resource?.title}>
                                {({ active }) => (
                                  <a
                                    href={resource.link!}
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm',
                                      resource?.__typename === 'ResourceLink' &&
                                        resource.isExternal &&
                                        'flex items-center gap-2',
                                    )}
                                    target={
                                      resource?.__typename === 'ResourceLink' && resource.isExternal
                                        ? '_blank'
                                        : '_self'
                                    }
                                    rel="noreferrer"
                                  >
                                    {resource?.title}
                                    {resource?.__typename === 'ResourceLink' &&
                                      resource.isExternal && <ExternalIcon />}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ))}
                </div>

                <div className="flex items-center shrink-0">
                  <Button
                    link="https://nouns.wtf/"
                    text="Nouns.wtf"
                    small
                    className="normal-case"
                  />
                </div>
              </div>
            </div>

            {/* MOBILE MENU */}
            <MobileNavigation categoriesWithResources={categoriesWithResources} />
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Web;
