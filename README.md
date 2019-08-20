# reactstatictest

This repo is a proof of concept of a simple node script that renders the initial state of a React component to a Drupal 7 `.tpl.php` file, meaning crawlers like Googlebot can still index a site accurately without having to implement a full-featured SSR solution.

## Getting started:
1. Clone this repo.
1. Run `npm install`
1. Run `npm run build`
1. Review the contents of `mytemplate.tpl.php`
1. Make modifications to `src/index.js` and re-run the above commands to test additional changes in React.
