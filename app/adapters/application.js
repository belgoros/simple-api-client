import DS from 'ember-data';
import ENV from 'simple-api-client/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.apiHost
});
