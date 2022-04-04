import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import registerGlobalContext, {
  GlobalContextMeta,
} from '@plasmicapp/host/registerGlobalContext';

import { Registerable } from './registerable';

export { ChakraProvider as ChakraProviderWrapper };

export const chakraProviderMeta: GlobalContextMeta<ChakraProviderProps> = {
  name: 'ChakraProviderWrapper',
  displayName: 'Chakra Provider',
  props: {
    resetCSS: {
      type: 'boolean',
      defaultValue: true,
    },
    portalZIndex: {
      type: 'number',
      defaultValue: undefined,
    },
  },
  importPath: 'plasmic-chakra-ui-cc',
  importName: 'ChakraProviderWrapper',
};

export function registerChakraProvider(
  loader?: Registerable,
  customchakraProviderMeta?: GlobalContextMeta<ChakraProviderProps>
) {
  const doRegisterComponent: typeof registerGlobalContext = (...args) =>
    loader
      ? loader.registerGlobalContext(...args)
      : registerGlobalContext(...args);
  doRegisterComponent(
    ChakraProvider,
    customchakraProviderMeta ?? chakraProviderMeta
  );
}
