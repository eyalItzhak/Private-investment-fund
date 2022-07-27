const path = require('path');
const fs = require('fs');
const solc = require('solc');
const fsExtra = require('fs-extra') //get all the dependncy for compile
 
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol'); //.sol file to compile
const source = fs.readFileSync(inboxPath, 'utf8');
 
const input = {   //make the imput for the compiler...
    language: 'Solidity',
    sources: {
        'Inbox.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};

/**
 * Writes the contracts from the compiled sources into JSON files, which you will later be able to
 * use in combination with web3.
 * @param compiled - Object containing the compiled contracts.
 * @param buildPath - Path of the build folder.
 */


function writeOutput(compiled, buildPath) {  //save compile data
    fsExtra.ensureDirSync(buildPath);

    for (let contractFileName in compiled.contracts) {
        const contractName = contractFileName.replace('.sol', '');
        console.log('Writing: ', contractName + '.json');
        fsExtra.outputJsonSync(
            path.resolve(buildPath, contractName + '.json'),
            compiled.contracts[contractFileName].basic
        );
    }
}
 

compilesFiles = JSON.parse(solc.compile(JSON.stringify(input))); //compile files
console.log(compilesFiles);
const buildPath = path.resolve(__dirname, 'build'); //save the files
writeOutput(compilesFiles, buildPath);//save