import DS from 'ember-data';
//import ENV from 'rarwe/config/environment';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.apiHost
});
