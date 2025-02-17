import React from 'react';

import CTA from 'components/pages/team/cta';
import Team from 'components/pages/team/team';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';

const TeamPage = () => (
  <Layout seo={SEO_DATA.team} headerTheme="white">
    <Team />
    <CTA />
  </Layout>
);

export default TeamPage;
