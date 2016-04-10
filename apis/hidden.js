import BaseAPI from './base';
import Save from '../models/save';
import Saves from './saves';

class Hidden extends Saves {
  path (method, query={}) {
    switch (method) {
      case 'get':
        return `user/${query.user}/hidden.json`;
      case 'post' :
        return 'api/hide';
      case 'delete':
        return 'api/unhide';
    }
  }
}

export default Hidden;
