import postal from 'postal';
import reqRes from 'postal.request-response';
import { defer } from 'icndb/utils/async';

reqRes(postal);


postal.configuration.promise.createDeferred = function() {
  return defer();
};

postal.configuration.promise.getPromise = function(dfd) {
  return dfd.promise;
};


export default postal
