import { Environment } from 'contentful-management';
import ContentfulBootstrap from '../../src/index';

export const createBootstrapper = (env?: Environment): ContentfulBootstrap => {
  if (!env) {
    return new ContentfulBootstrap({} as unknown as Environment);
  }

  return new ContentfulBootstrap(env);
};
