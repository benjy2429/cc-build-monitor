import { clientConfig } from '../../config';

export default `
<!DOCTYPE html>
<html>
  <head>
    <title>CC Build Monitor</title>
    <link rel="stylesheet" type="text/css" href="/assets/bundle.css" />
  </head>
  <body>
    <main id="app"></main>
    <script>
      window.config = ${JSON.stringify(clientConfig)};
    </script>
    <script src="/assets/bundle.js"></script>
  </body>
</html>
`;

