import { faker } from '@faker-js/faker';
import generateRandomEmail from './generateRandomEmail';

/**
 * Generates a random Account for new user registration
 * @return {Object} account object
 */
export default () => ({
  email: generateRandomEmail(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
});
