const {defineConfig} = require('cypress')
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');

const {
    queryTestDb,
    parseXlsx
} = require('./cypress/support/tasks');

module.exports = defineConfig({
    chromeWebSecurity: false,
    defaultCommandTimeout: 25000,
    viewportWidth: 1280,
    viewportHeight: 1280,
    video: true,
    videoCompression: false,
    videoUploadOnPasses: false,
    watchForFileChanges: false,
    numTestsKeptInMemory: 1,
    experimentalMemoryManagement: true,
    retries: {
        runMode: 0,
        openMode: 0,
    },
    reporter: 'junit',
    reporterOptions: {
        mochaFile: 'cypress/reports_qa/junit.[hash].xml',
    },
    e2e: {
        env: {
            env: 'qa',
            db: {
                host: 'xxxxxxxx',
                user: 'xxxxxxxx',
                password: 'xxxxxxxx',
            },
            xxxxxxxx: "xxxxxxxxp",
            xxxxxxxx: "xxxxxxxx",
            xxxxxxxx: {
                FE: "xxxxxxxx",
                BE: "xxxxxxxx"
            },
            xxxxxxxx: "xxxxxxxx",
            loginName: 'xxxxxxxx',
            baseUserLoginName: 'xxxxxxxx',
            negativeUserLoginName: 'xxxxxxxx',
            negativeUserName: 'xxxxxxxx',
            xxxxxxxx: 'xxxxxxxx',
            xxxxxxxx: 'xxxxxxxx',
            password: 'xxxxxxxx',
            defaultUserID: 'xxxxxxxx',
            xxxxxxxx: 'xxxxxxxx',
            dbpassword: null
        },

        setupNodeEvents(on, config) {
            getCompareSnapshotsPlugin(on, config);
            require('cypress-grep/src/plugin')(config);
            if (config.env.dbpassword != null) {
                config.env.db["password"]= config.env.dbpassword;
            }
            on('task', {
                queryTestDb({query, db}) {
                    return queryTestDb(query, db);
                }
            })
            return config;
        },
        baseUrl: 'xxxxxxxx',
        testIsolation:false
    },
})
