import fs from "fs";
import path from "path";
import sharp from "sharp";


function getFiles(dir) {
    const files = fs.readdirSync(dir);
    let fileList = [];

    const promises = files.map(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            return getFiles(filePath).then(subFiles => {
                fileList = fileList.concat(subFiles);
            });
        } else {
            const source = `./gallery/${path.basename(dir)}/${file}`;
            return sharp(filePath)
                .metadata()
                .then(metadata => {

                    let dirs = dir.split("/")

                    fileList.push({
                        name: file,
                        folder: dirs[dirs.length - 1],
                        width: metadata.width,
                        height: metadata.height,
                        src: source
                    });
                })
                .catch(err => {
                    console.error('Error:', err);
                });
        }
    });

    return Promise.all(promises).then(() => fileList);
}


export function writeToFile(data, fileName,) {
    let jsonString = JSON.stringify(data);
    fs.writeFileSync(fileName, jsonString, 'utf-8', (err) => {
        if (err) throw err;
        console.log('Data added to file');
    });
}

export class Photo {
    src;
    width;
    height;

    constructor(src, width, height) {
        this.src = src;
        this.width = width;
        this.height = height;
    }
}


async function run() {
    getFiles("../public/gallery").then(files => {

            writeToFile(files, "../src/photos.json");
        }
    )
}

run()