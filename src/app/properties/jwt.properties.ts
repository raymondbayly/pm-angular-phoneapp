import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import {IonicStorageModule, Storage} from '@ionic/storage';


/**
   * JWT Authorization properties for the application
   *
   * @remarks
   * initial build in Angular 7 Ionic 4
   *
   * @param x - NA
   * @param y - NA
   * @returns NA
   *
   */

export function jwtOptionsFactory(storage: Storage) {
    return {
        tokenGetter: () => storage.get('jwt_token'),
        whitelistedDomains: [
            // Auth
            //  Port 8000 (Dev)
            //  Port 10030 (QA)

            // PeraMobile
            //  Port 9999 (Dev)
            //  Port 10020 (QA)

            // Emulator
            'localhost:8000',
            'localhost:9999',

            // QA Environment
            'ph-appsvr.ph.com:10030',
            'ph-appsvr.ph.com:10020',

            // Dev Environment
            'ph-appsvr.ph.com:8000',
            'ph-appsvr.ph.com:9999',

            // Developer's Machine
            '192.168.201.50:8000',
            '192.168.201.50:9999',

            '192.168.201.51:8000',
            '192.168.201.51:9999',
        ]
    };
}
