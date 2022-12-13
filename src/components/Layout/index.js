import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {node} from 'prop-types';

import Favicon from '@assets/images/groom_1.png';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

const IMAGE_URL = `https://toan-phuong-wedding.herokuapp.com/static/img-1-140ff1e3fc198bdf4b6ec30cff77c672.jpg`;
const META_DESCRIPTION = `Ngày chung vui của chúng tôi - Mr.Toan & Ms.Phuong`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Mr.Toan ❤ Ms.Phuong</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content="Ngày chung vui của chúng tôi Mr.Toan & Ms.Phuong" />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:url" content="https://toan-phuong-wedding.herokuapp.com" />
        <meta property="og:site_name" content="Ngày chung vui của chúng tôi Mr.Toan & Ms.Phuong" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta name="twitter:title" content="Ngày chung vui của chúng tôi Mr.Toan & Ms.Phuong" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />
        <meta name="twitter:card" content="summary" />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
