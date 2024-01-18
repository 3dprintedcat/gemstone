import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gemstone',
  appName: 'gemstone',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
