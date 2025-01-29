import { faker } from '@faker-js/faker';

/**
 * Generates a random Email based on username and timestamp
 * Using the same domain
 * @return {String} Random valid email
 */
export default () => {
  const userName = faker.internet.userName();
  const domain = '@fakermail.com';

  return `${userName}${domain}`;
};