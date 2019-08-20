import React from 'react';
import ReactDOMServer from 'react-dom/server';
import RyanComponent from './RyanComponent';
import fs from 'fs';

const initialMarkup = ReactDOMServer.renderToStaticMarkup(<RyanComponent />);

fs.writeFileSync('./mytemplate.tpl.php', initialMarkup, (err) => {
  if (err) throw err;

  console.log('Static markup saved!');
});
