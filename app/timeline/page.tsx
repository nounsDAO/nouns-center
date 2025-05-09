import { TinaMarkdownWithEmbeds } from '@/components/markdown-embeds/tina-markdown-with-embeds';
import { cn } from '@/lib/cn';
import { getRandomNounPic } from '@/utils';
import client from '@tina/client';
import * as motion from 'motion/react-client';
import { Fragment } from 'react';

export const metadata = {
  title: `Timeline | Nouns Center`,
};

export default async function TimelinePage() {
  const events = (
    await client.queries.timelineConnection({ sort: 'timestamp' })
  ).data.timelineConnection.edges!.map(edge => edge!.node!);

  return (
    <div className="relative mx-3 mb-24 mt-6 sm:mt-16">
      <h1 className="mb-6">Nouns Timeline</h1>

      <div className="relative mx-auto grid max-w-2xl grid-cols-[max-content_1fr] gap-x-3 gap-y-10">
        <div className="absolute left-[24px] top-8 self-center h-[calc(100%-3rem)] w-1 -z-10 bg-gray-200" />
        {events.map((event, i) => (
          <Fragment key={`event-${i}`}>
            <motion.img
              className="rounded-full size-12 border-2 box-content border-gray-200"
              src={getRandomNounPic(i)}
              alt="noun"
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: 'spring', visualDuration: 0.3, bounce: 0.7, delay: 0.2 },
              }}
            />

            <motion.div
              initial={{ opacity: 0, translateX: '40px' }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{
                duration: 0.4,
                translateX: { type: 'spring', visualDuration: 0.3, bounce: 0.3 },
              }}
              className={cn(
                'relative prose prose-sm bg-white p-4 rounded-lg shadow-lg',
                'before:size-3 before:rotate-45 before:bg-white before:absolute before:z-[1] before:top-5 before:-translate-x-1/2 before:left-0',
              )}
            >
              <h2 className="text-lg! mb-0 leading-3">{event.title}</h2>
              <p className="font-bold text-sm">{new Date(event.timestamp).toLocaleDateString()}</p>
              <TinaMarkdownWithEmbeds content={event.content} />
            </motion.div>
          </Fragment>
        ))}
        <motion.img
          className="rounded-full size-12 border-2 box-content border-gray-200"
          src={getRandomNounPic(999)}
          alt="noun"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: 'spring', visualDuration: 0.3, bounce: 0.7, delay: 0.2 },
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: 'spring', visualDuration: 0.3, bounce: 0.3 },
          }}
          className="prose prose-sm bg-white p-4 rounded-lg shadow-lg"
        >
          <h2 className="text-lg! mb-0">What comes next?</h2>
          <p className="font-bold text-sm">{}</p>
        </motion.div>
      </div>
    </div>
  );
}
