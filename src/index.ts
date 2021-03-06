import { ClientAPI, ContentType } from 'contentful-management';
import { ContentTypeMap } from './contentTypes/types';
import { getDuplicateTypeMessage } from './contentTypes/utils';

export default class ContentfulBootstrap {
  private driver: ClientAPI;

  private contentTypes: ContentTypeMap = {};

  /**
   * Instantiate a Contentful Bootstrap helper.
   * @param driver The `contentful-management` client used to populate content types,
   * content, assets, etc.
   */
  constructor(driver: ClientAPI) {
    this.driver = driver;
  }

  /**
   * Add a content type to upload when calling `ContentfulBootstrap.bootstrap`.
   * @param type The Contentful content type object to add.
   * @param overwrite If `true`, `type` will overwrite any previously-registered content type
   * with the same `sys.id`.
   * @throws Will throw an `Error` if a content type with the same `sys.id` as `type` has been
   * registered and `overwrite` is `false`.
   */
  registerContentType(type: ContentType, overwrite = false) {
    const contentTypeKey = type.sys.id;
    const keyExists = contentTypeKey in this.contentTypes;

    if (keyExists && !overwrite) {
      throw new Error(getDuplicateTypeMessage(contentTypeKey));
    }

    this.contentTypes[contentTypeKey] = type;
  }
}
