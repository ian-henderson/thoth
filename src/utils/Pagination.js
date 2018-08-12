/* eslint-disable import/prefer-default-export */

export const makeCursorFromFields = fields => Buffer
  .from(fields.join('/')).toString('base64');
