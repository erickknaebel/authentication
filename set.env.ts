import { TagContentType } from '@angular/compiler';

const fs = require('fs');
const targetDirectory = './src/environments'
const targetPath = './src/environments/environment.ts';
const colors = require('colors');
const dotnenv = require('dotenv');
let envConfigFile = ``;
dotnenv.config();

let params = {};

process.argv.map(value => {
    const param = value.split('=');
    params = { ...params, [param[0]]: param[1] };
})


try {
    console.log(`Deleting the current environment directory at ${targetDirectory}...`);
    fs.rmdirSync(targetDirectory, { recursive: true }, () => {
        console.log(`Done! \n`);
    });

} catch (error) {
    fs.access(targetDirectory, function (error) {
        if (error) {
            console.log(colors.magenta(`Could not delete ${targetDirectory} because it does not exist. \n`));
        }
    })
} finally {
    if (!fs.existsSync(targetDirectory)) {
        console.log(`Creating the new directory ${targetDirectory}...`);
        fs.mkdirSync(targetDirectory);
        console.log(`Done! \n\n`);
    }
}

envConfigFile = `export const environment = {
        production: ${params['prod'] ? params['prod'] : false},
        port: ${params['port'] ? params['port'] : 4200},
        databaseConfig: {
         baseUrl: '${params['bseUrl'] ? params['baseUrl'] : 'http://localhost:3000/api/v1/'}'
        }
     };`;


fs.writeFile(targetPath, envConfigFile, function (err) {
    console.log(`Saving the generated environment file to ${targetDirectory}... \n`);
    if (err) {
        throw console.error(err);
    } else {
        console.log(colors.magenta(`File generation is complete and contains the following: \n ${envConfigFile} \n`));
        console.log(colors.green(`All processes have finished successfully.\n`));
        console.log('Starting the build process...');
    }
});
