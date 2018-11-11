import React from 'react';
import { injectGlobal } from 'styled-components';
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
    <Layout headerLink="#sayHi">
      <Homepage />
    </Layout>
  </div>
);

export default Page;
