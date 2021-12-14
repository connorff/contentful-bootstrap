import { expect } from 'chai';
import ContentfulBootstrap from '../src';
import { getDuplicateTypeMessage } from '../src/contentTypes/utils';
import { createBootstrapper } from './utils/bootstrapper';
import { createContentType } from './utils/contentTypes';

let bootstrapper: ContentfulBootstrap;
const setup = () => { bootstrapper = createBootstrapper(); };

describe('Content type', () => {
  describe('#registration', () => {
    beforeEach(setup);

    it('fails on duplicates', () => {
      const typeId = 'example_id';
      const addType = () => bootstrapper.registerContentType(createContentType(typeId));

      addType();
      expect(addType).to.throw(getDuplicateTypeMessage(typeId));
    });
  });
});
