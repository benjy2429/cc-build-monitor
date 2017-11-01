if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  require('dotenv').config();
}

module.exports = {
  endpoint: process.env.CIRCLE_ENDPOINT || 'https://circleci.com',
  token: process.env.CIRCLE_TOKEN,
  useMocks: process.env.USE_MOCKS === 'true',
  refreshRate: parseInt(process.env.REFRESH_RATE, 10) || 60000,
  stripOrgs: process.env.STRIP_ORGS === 'true',
  blacklist: process.env.BLACKLIST ? process.env.BLACKLIST.split(',') : [],
  whitelist: process.env.WHITELIST ? process.env.WHITELIST.split(',') : [],
};
