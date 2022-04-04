import { Button, ButtonProps } from '@chakra-ui/react';
import registerComponent, {
  ComponentMeta,
} from '@plasmicapp/host/registerComponent';

import { Registerable } from './registerable';

export { Button as ChakraButton };

export const buttonMeta: ComponentMeta<ButtonProps> = {
  name: 'ChakraButton',
  displayName: 'Chakra Button',
  props: {
    colorScheme: {
      type: 'choice',
      options: [
        'whiteAlpha',
        'blackAlpha',
        'gray',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'cyan',
        'purple',
        'pink',
        'linkedin',
        'facebook',
        'messenger',
        'whatsapp',
        'twitter',
        'telegram',
      ],
      defaultValue: 'gray',
    },
    children: {
      type: 'slot',
      defaultValue: [
        {
          type: 'text',
          value: 'Button',
        },
      ],
    },
  },
  importPath: 'plasmic-chakra-ui-cc',
  importName: 'ChakraButton',
};

export function registerButton(
  loader?: Registerable,
  customButtonMeta?: ComponentMeta<ButtonProps>
) {
  const doRegisterComponent: typeof registerComponent = (...args) =>
    loader ? loader.registerComponent(...args) : registerComponent(...args);
  doRegisterComponent(Button, customButtonMeta ?? buttonMeta);
}
