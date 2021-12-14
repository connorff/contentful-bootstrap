import { ContentType } from 'contentful-management';

export const createContentType = (id: string) => ({
  sys: { id },
} as unknown as ContentType);
