"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProvider = void 0;
const config_service_1 = require("../config/config.service");
const typeorm_1 = require("typeorm");
exports.databaseProvider = [
    {
        provide: 'DATABASE_CONNECTION_POSTGRES',
        inject: [config_service_1.ConfigService],
        useFactory: (config) => {
            const dataSource = new typeorm_1.DataSource({
                type: 'postgres',
                host: config.get('HOST') || 'localhost',
                port: +config.get('PORT_DB'),
                username: config.get('USERNAME') || 'root',
                password: config.get('PASSWORD') || 'prueba',
                database: config.get('DATABASE'),
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ]
            });
            return dataSource.initialize();
        }
    }
];
//# sourceMappingURL=database.providers.js.map