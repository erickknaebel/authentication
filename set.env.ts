
const fs = require('fs');
const targetPath = './src/environments/environment.ts';
const colors = require('colors');
const dotnenv = require('dotenv');
dotnenv.config();

let params = {};

process.argv.map(value => {
    const param = value.split('=');
    params = {...params, [param[0]] : param[1]};
})

const envConfigFile = `export const environment = {
   production: ${params['prod'] ? params['prod'] : false},
   port: ${params['port'] ? params['port'] : 4200},
   databaseConfig: {
    baseUrl: '${params['bseUrl'] ? params['baseUrl'] : 'http://localhost:3000/api/'}'
   }
};
`;
console.log(colors.magenta('The file `environment.ts` will be written as: \n'));
console.log(colors.grey(envConfigFile));
fs.writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        throw console.error(err);
    } else {
        console.log(colors.magenta(`Angular environment.ts file generated at ${targetPath} \n`));
    }
});