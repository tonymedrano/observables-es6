System.config({
    map: {
        'plugin-traceur': './node_modules/systemjs-plugin-traceur/plugin-traceur.js',
        'traceur': './node_modules/traceur/bin/traceur.js',
        'traceur-runtime': './node_modules/traceur/bin/traceur-runtime.js',
        'rxjs': './node_modules/rxjs'
    },
    packages: {
        'rxjs': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'rxjs/ajax': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'rxjs/fetch': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'rxjs/operators': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'rxjs/testing': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'rxjs/webSocket': {
            main: 'index.js',
            defaultExtension: 'js'
        }
    },
    meta: {
        'traceur': {
            format: 'global',
            exports: 'traceur',
            scriptLoad: false
        },
        'traceur-runtime': {
            format: 'global',
            exports: '$traceurRuntime'
        }
    },
    transpiler: 'plugin-traceur',
    transpilerRuntime: false
});

Promise.all([
    System.import('rxjs'),
    System.import('rxjs/ajax'),
    System.import('rxjs/fetch'),
    System.import('rxjs/operators'),
    System.import('rxjs/testing'),
    System.import('rxjs/webSocket'),
]).then(
    () => console.log('Successfully tested all entry-points with SystemJS!'),
    (error) => {
        console.error('\n\nFailed to load an entry-points via SystemJS: \n\n', error.message);
        process.exit(-1);
    }
);