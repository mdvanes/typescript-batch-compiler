const path = require('path');
const fs = require('fs');
const del = require('del');
const { exec } = require('child_process');

exports.typescriptBatchCompiler = {
    setUp: function (done) {
        // run before each test
        del(['test/fixtures/*.js', 'test/fixtures/*.js.map'])
            .then(paths => {
                console.log('Deleted files and folders:\n', paths.join('\n'));
                exec('node index.js -b', (error, stdout, stderr) => {
                    // TODO promisify would be better
                    if (error) {
                        console.error(`exec error: ${error}`);
                        return;
                    }
                    console.log(`stdout: ${stdout}`);
                    console.log(`stderr: ${stderr}`);
                    done();
                });
            })
            .catch(err => {
                console.log('Can not delete: ' + err);
                done();
            });
    },
    'both files created at once': function(test) {
        // Don't filter out linebreaks here, because in that case you can't test for linebreaks in the correct place.
        // If the test fails because of linebreaks, check if the "expected" fixture is saved with LF linebreaks only, not CRLF.
        let actual = fs.readFileSync(path.join(__dirname, 'fixtures/example1.js'), {encoding: 'utf-8'});
        let expected = fs.readFileSync(path.join(__dirname, 'expected/example1.js'), {encoding: 'utf-8'});
        //console.log(actual, actual);
        test.equal(actual, expected, 'should have compiled example1');

        actual = fs.readFileSync(path.join(__dirname, 'fixtures/example2.js'), {encoding: 'utf-8'});
        expected = fs.readFileSync(path.join(__dirname, 'expected/example2.js'), {encoding: 'utf-8'});
        test.equal(actual, expected, 'should have compiled example2');

        test.done();
    },
    // secondExampleFile: function(test) {
    //     const actual = fs.readFileSync(path.join(__dirname, 'fixtures/example2.js'), {encoding: 'utf-8'});
    //     const expected = fs.readFileSync(path.join(__dirname, 'expected/example2.js'), {encoding: 'utf-8'});
    //     test.equal(actual, expected, 'should compile example2');
    //     test.done();
    // }
};