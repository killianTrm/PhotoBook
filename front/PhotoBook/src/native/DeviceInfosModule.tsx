import {NativeModules} from 'react-native';

const {DeviceInfosModule} = NativeModules;

export interface DeviceInfosModuleType {
  getUniqueId: (str: string) => Promise<string>;
}

export default DeviceInfosModule as DeviceInfosModuleType;
