"use strict";

const VersionService = require('./VersionService');

describe('VersionService', () => {
    it('getVersion() should return 0.1.0', () => {
        let versionService = new VersionService();
        expect(versionService.getVersion()).toBe('0.1.0');
    });
});