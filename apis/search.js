import BaseAPI from './base';
import Save from '../models/save';

import Comment from '../models/comment';
import Link from '../models/comment';

class Saves extends BaseAPI {
  static dataCacheConfig = null;

  get requestCacheRules () { return null; }

  put = this.notImplemented('put');
  patch = this.notImplemented('patch');
  post = this.notImplemented('post');
  del = this.notImplemented('del');

  path (method, query={}) {
    let path = '';

    if (query.subreddit) {
      path = `r/${query.subreddit}`;
    }

    return `${path}/search.json`;
  }

  formatQuery (query) {
    if (query.subreddit) {
      query.restrict_sr = 'on';
      delete query.subreddit;
    }

    return query;
  }

  formatBody (res) {
    const { body } = res;
    const things = body.data;

    return things.map(function(t) {
      switch (t.kind) {
        case 't1':
          return ((new Comment(t.data)).toJSON());
        case 't3':
          return ((new Link(t.data)).toJSON());
      }
    });
  }
}

export default Saves;
