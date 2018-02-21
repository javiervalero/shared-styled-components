import { flatten } from 'lodash';

export const sumNumbers = (a, b) => (a + b);

export const flattenArray = (array) => (flatten(array));

export { default as HelloWorldStyled } from './components/HelloWorld';
export { HelloWorld } from './components/HelloWorld';
