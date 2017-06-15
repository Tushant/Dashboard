import createMemoryHistory from 'history/createMemoryHistory';

import configureStore from 'store';

import LoginContainer from '../index';
import createLoader from '../loader';

describe('LoginContainer loader', () => {
  const store = configureStore({}, createMemoryHistory());

  const loader = createLoader(store);

  it('loads LoginContainer', () => {
    const loaded = new Promise((resolve) => (loader(resolve)));
    expect.assertions(1);
    return loaded.then((comp) => expect(comp.default).toEqual(LoginContainer));
  });
});
