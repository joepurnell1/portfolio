import React from 'react';
import { injectGlobal } from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Homepage from '../components/pages/homepage';
import * as fonts from '../fonts';

/* eslint-disable */
  injectGlobal`
    @font-face {
      font-family: 'Notosans';
      src:
        local('Notosans'), url('${fonts.Notosans}') format('woff');
    }
    @font-face {
      font-family: 'Poppins';
      src:
        local('Poppins'), url('${fonts.Poppins}') format('woff');
    }
    body {
      margin: 0;
    }
  `;
/* eslint-enable */

const Page = () => (
  <div>
    <Helmet>
      <title>Personal Website and Portfolio for Joe Purnell</title>
      <meta charset="UTF-8" />
      <meta name="description" content="Have a glimpse into the work of fullstack developer, Joe Purnell." />
      <meta name="keywords" content="portfolio, fullstack, developer, web, mobile, apps, software" />
      <meta name="author" content="Joe Purnell" />
    </Helmet>
    <Layout headerLink="#sayHi">
      <Homepage />
    </Layout>
  </div>
);

export default Page;
