const sharp = require('sharp');
const fs = require('fs');


module.exports = function resize(path, format, width, height) {
    const readStream = fs.createReadStream(path);
    let transform = sharp();

    if (format) transform.toFormat(format);

    if (width || height) transform.resize(width, height);

    transform.webp({ quality: 80 });

    return readStream.pipe(transform)
}