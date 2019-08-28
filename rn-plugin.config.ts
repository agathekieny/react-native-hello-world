import { UserDependencyConfig } from '@react-native-community/cli'
// or use types defined in rn-plugin.types
//import {UserDependencyConfig} from './rn-plugin.types'

export const rnPluginConfig: UserDependencyConfig = {
  commands: [
    {
      name: 'test-new-plugin',
      func :  () => new Promise((resolve) => { resolve();console.log('Hello world')})
    },
  ],
};

