if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  require('dotenv').config();
}

module.exports = {
  serverConfig: {
    endpoint: process.env.ENDPOINT,
    useMocks: process.env.USE_MOCKS === 'true',
    blacklist: process.env.BLACKLIST ? process.env.BLACKLIST.split(',') : [],
    whitelist: process.env.WHITELIST ? process.env.WHITELIST.split(',') : [],
  },
  clientConfig: {
    refreshRate: parseInt(process.env.REFRESH_RATE, 10) || 60000,
    stripOrgs: process.env.STRIP_ORGS === 'true',
  },
};

