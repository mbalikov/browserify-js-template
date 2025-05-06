const through2 = require('through2');

module.exports = function(file, options = {}) {
    const extensions = options.extensions || '.html';

    let shouldProcess = false;
    if (typeof extensions === 'string') {
        shouldProcess = file.endsWith(extensions)
    } else {
        shouldProcess = extensions.some(ext => file.endsWith(ext));
    }
    if (!shouldProcess)
        return through2();

    let buffer = '';
    return through2(function(chunk, enc, next) {
        buffer += chunk.toString();
        next()
    }, function(done) {
        let data = buffer.toString()
            .replace(/`/g, '\\`');

        const output = 
`module.exports = function(args = {}) { 
    return \`${data}\`; 
}`;
        this.push(output);
        done();
    });
}
