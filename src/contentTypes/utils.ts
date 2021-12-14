export const getDuplicateTypeMessage = (id: string) => (
  `A content type with the key '${id}' already exists. If you'd like to override that
    content type, call registerContentType with overwrite = true.`
);
