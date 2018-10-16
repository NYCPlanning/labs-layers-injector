import DS from 'ember-data';
import fetch from 'fetch';

export default DS.JSONAPIAdapter.extend({
  host: 'https://layers-api.planninglabs.nyc',
  namespace: 'v1',

  async query(store, type, query = {}) {
    const URL = this.buildURL(type.modelName);

    return fetch(`${URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(query),
    }).then(blob => blob.json());
  },
});
