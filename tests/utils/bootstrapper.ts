import { ClientAPI } from 'contentful-management';
import ContentfulBootstrap from '../../src/index';

export const createBootstrapper = (client?: ClientAPI): ContentfulBootstrap => {
  if (!client) {
    return new ContentfulBootstrap({} as unknown as ClientAPI);
  }

  return new ContentfulBootstrap(client);
};
