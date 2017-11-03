import config from '../../config';

export default `
<!DOCTYPE html>
<html>
  <head>
    <title>CircleCI Build Monitor</title>
    <link rel="stylesheet" type="text/css" href="/assets/bundle.css" />
  </head>
  <body>
    <main id="app"></main>
    <script>
      window.config = ${JSON.stringify(config)};
    </script>
    <script src="/assets/bundle.js"></script>
  </body>
</html>
`;

