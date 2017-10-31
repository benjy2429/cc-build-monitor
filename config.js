module.exports = {
  endpoint: process.env.CIRCLE_ENDPOINT || 'https://circleci.com',
  token: process.env.CIRCLE_TOKEN,
  useMocks: process.env.USE_MOCKS === 'true',
  refreshRate: parseInt(process.env.REFRESH_RATE, 10) || 60000,
};
