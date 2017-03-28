'use strict';

const VersionService = require('./VersionService');

let versionService, version;

describe('VersionService', () => {

    beforeAll(() => {
        version = process.env.npm_package_version;
    });

    beforeEach(() => {
        versionService = new VersionService();
    });


    it('getVersion() should return the correct version', () => {
        expect(versionService.getVersion()).toBe(version);
    });

    afterEach(() => {

    });

    afterAll(() => {

    });

});