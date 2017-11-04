const path = require('path');
const fs = require('fs');

exports.typescriptBatchCompiler = {
    // setUp: function (done) {
    //     // setup here if necessary
    //     done();
    // },
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
        console.log('secondExampleFile');
        test.done();
    }
};