[![CircleCI](https://circleci.com/gh/benjy2429/cc-build-monitor-v2/tree/master.svg?style=shield)](https://circleci.com/gh/benjy2429/cc-build-monitor-v2/tree/master)

# CC Build Monitor

A Koa/ReactJS app to monitor the status of continuous integration builds.

This currently supports CircleCI but will be expanded to support any CI server that implements the [Multiple Project Summary Reporting Standard](https://github.com/erikdoe/ccmenu/wiki/Multiple-Project-Summary-Reporting-Standard).

## Dependencies

* Node 8
* Yarn

## Usage

Install dependencies:

`$ yarn`

Run the server:

`$ npm run start-dev`

Or run the server with mocks:

`$ npm run start-mock`

Access the build monitor at http://localhost:3000

## Configuration

Options can be specified using environment variables. This project uses [dotenv](https://www.npmjs.com/package/dotenv) to make local development easier.

Copy `.env.example` to a new file `.env` and set your config options there. These will be loaded automatically when starting the server.

Possible options include:

Environment variable | Description | Default value
---|---|---
`ENDPOINT`|The endpoint to fetch data from|-
`PORT`|Run the server on a different port|`3000`
`REFRESH_RATE`|How often to fetch new data in milliseconds|`60000`
`STRIP_ORGS`|Don't include the organisation when displaying projects|`false`
`WHITELIST`|Comma separated list of project names to show|-
`BLACKLIST`|Comma separated list of project names to exclude|-

_Note: If both a whitelist and blacklist are specified, the whitelist will take priority._

## Testing

To run the Jest unit tests:

`$ npm test`

To also update snapshot tests:

`$ npm run test-update`

## Linting

To run all the linters:

`$ npm run lint`

To run ESLint only:

`$ npm run lint-js`

To run stylelint only:

`$ npm run lint-css`

### Auto-fix

Some common linting errors can be auto-fixed using the following scripts:

`$ npm run lint-js-fix`

`$ npm run lint-css-fix`

## Contributing

Contributions are welcome! Feel free to create issues or pull requests for bug fixes and improvements.
