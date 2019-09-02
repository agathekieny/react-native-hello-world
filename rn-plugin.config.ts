import { UserDependencyConfig } from '@react-native-community/cli'
// or use types defined in rn-plugin.types
//import {UserDependencyConfig} from './rn-plugin.types'

export const rnPluginConfig: UserDependencyConfig = {
  commands: [
    {
      name: 'test-new-plugin',
      func :  async () => { console.log('Hello world'); }
    },
  ],
};

