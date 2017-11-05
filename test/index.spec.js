const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

exports.typescriptBatchCompiler = {
    setUp: function (done) {
        // TODO clean
        fs.unlink('fixtures/example1.js');
        exec('node index.js -b', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            done();
        });
    },
    firstExampleFile: function(test) {
        // test.expect(1);
        // Don't filter out linebreaks here, because in that case you can't test for linebreaks in the correct place.
        // If the test fails because of linebreaks, check if the "expected" fixture is saved with LF linebreaks only, not CRLF.
        const actual = fs.readFileSync(path.join(__dirname, 'fixtures/example1.js'), {encoding: 'utf-8'});
        const expected = fs.readFileSync(path.join(__dirname, 'expected/example1.js'), {encoding: 'utf-8'});
        //console.log(actual, actual);
        test.equal(actual, expected, 'should compile example1');

        test.done();
    },
    secondExampleFile: function(test) {
        const actual = fs.readFileSync(path.join(__dirname, 'fixtures/example2.js'), {encoding: 'utf-8'});
        const expected = fs.readFileSync(path.join(__dirname, 'expected/example2.js'), {encoding: 'utf-8'});
        test.equal(actual, expected, 'should compile example2');
        test.done();
    }
};