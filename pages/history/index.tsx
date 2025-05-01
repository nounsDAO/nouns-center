import React from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Timeline from '../../components/Timeline/Timeline';
import Subheader from '../../components/Subheader';
import PageHeader from '../../components/Layout/PageHeader';
import PageContent from '../../components/Layout/PageContent';

const History = () => {
  return (
    <>
      <PageHeader>
        <Header title="History | Nouns Center" />
        <Title title="History" />

        <Subheader
          title="Moments &#38; Milestones"
          body="A timeline of Nouns DAO's major milestones and noteworthy moments that have happened since the project's inception. Click the button to suggest an event that should be added."
        />
        {/* <Button
          text="What's missing?"
        /> */}
      </PageHeader>

      <PageContent>
        <Timeline />
      </PageContent>
    </>
  );
};

export default History;
