/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Subheader from '../../components/Subheader';
import PageHeader from '../../components/Layout/PageHeader';
import PageContent from '../../components/Layout/PageContent';
import subdaos from './subdaos.json';
import {
  FaTwitter as TwitterIcon,
  FaDiscord as DiscordIcon,
  FaDiscourse as DiscourseIcon,
} from 'react-icons/fa';
import { TbWorld as WebsiteIcon } from 'react-icons/tb';

const Subdaos = () => {
  // interface SubdaoProps {
  //   name: 'string';
  //   overview: 'string';
  //   join: 'string';
  //   links: [platform: 'string', link: 'string'];
  // }

  return (
    <>
      <PageHeader>
        <Header title="SubDAOs | Nouns Center" />
        <Title title="SubDAOs" />

        <Subheader
          title="Nounish subDAOs &amp; Coummunities"
          body="A summary of all subDAOs in the NounsDAO Ecosystem. Find out what each subDAOs is about, how to join them, and where to get started building in subDAOs. Click the button below to add a Nounish subDAOs not yet on this page."
        />

        {/* <Button text="Add community" /> */}
      </PageHeader>

      <PageContent>
        <div className="subdaos">
          {subdaos.map((s: any) => (
            <div key={s.description} className="pb-8">
              <div className="flex items-center gap-3">
                <p className="font-bold text-xl sm:text-3xl tracking-wider text-nouns">{s.name}</p>
                <p className="font-bold text-2xl">{' • '}</p>

                <div className="flex gap-3">
                  {s.links.map(link => (
                    <div key={link.link}>
                      <a className="w-12" href={link.link} target="_blank" rel="noreferrer">
                        {link.platform === 'Website' && <WebsiteIcon />}{' '}
                        {link.platform === 'Twitter' && <TwitterIcon />}{' '}
                        {link.platform === 'Discord' && <DiscordIcon />}{' '}
                        {link.platform === 'Discourse' && <DiscourseIcon />}{' '}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t-2 "></div>
              <div className="rounded-xl py-4">
                <img className="" src={s.img} alt={s.img} />
              </div>
              <pre>{s.overview}</pre>
              <div className="pb-4">
                <p className="font-bold">How To Join:</p>
                <pre>{s.join}</pre>
              </div>

              <div className="mb-12 sm:mb-20 flex">
                <dl className="grid grid-cols-2 gap-x-4 gap-y-4 w-1/2 sm:w-1/3">
                  {s.stats.map(stat => (
                    <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                      <dt className="text-base capitalize font-medium text-gray-500">
                        {stat.label}
                      </dt>
                      <dd className="text-2xl font-bold tracking-tight text-gray-900">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </PageContent>
    </>
  );
};

export default Subdaos;
