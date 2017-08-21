import circleci from '../circleci';
import mock from '../../../mocks/mock';
import mockMalformed from '../../../mocks/mock-malformed';

describe('CircleCI', () => {
  it('resolves data', async () => {
    const result = await circleci(Promise.resolve({ data: mock }));
    expect(result).toMatchSnapshot();
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
