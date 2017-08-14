import circleci from '../circleci';
import mock from '../../../mocks/mock';
import mockMalformed from '../../../mocks/mock-malformed';

describe('CircleCI', () => {
  it('resolves data', async () => {
    const result = await circleci(Promise.resolve({ data: mock }));

    expect(result).toEqual([
      {
        name: 'project1',
        activity: 'Sleeping',
        buildNumber: '1',
        buildStatus: 'Success',
        buildTime: '2000-01-01T12:00:00.000Z',
      },
      {
        name: 'project2',
        activity: 'Sleeping',
        buildNumber: '13',
        buildStatus: 'Failure',
        buildTime: '2000-01-01T12:00:00.000Z',
      },
      {
        name: 'project3',
        activity: 'Building',
        buildNumber: '42',
        buildStatus: 'Unknown',
        buildTime: '2000-01-01T12:00:00.000Z',
      },
    ]);
  });

  it('returns an empty array on network error', async () => {
    const result = await circleci(Promise.reject());
    expect(result).toEqual([]);
  });

  it('returns an empty array when the response is malformed', async () => {
    const result = await circleci(Promise.resolve({ data: mockMalformed }));
    expect(result).toEqual([]);
  });
});
