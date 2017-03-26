/*global module*/
module.exports = {
    coverage: {
        src: 'test', // a folder works nicely
        options: {
            coverage: true,
            check: {
                lines: 75,
                statements: 75,
                functions: 75,
                branches: 60
            },
            mask: '**/*.spec.js',
            reportFormats: ['cobertura', 'lcovonly', 'html'],
            coverageFolder: 'reports'
        }
    }
};