import { Registerable } from './registerable';
import { registerButton } from './registerButton';
import { registerChakraProvider } from './registerChakraProvider';

export * from './registerButton';
export * from './registerChakraProvider';

export function registerAll(loader?: Registerable) {
  registerChakraProvider(loader);
  registerButton(loader);
}
