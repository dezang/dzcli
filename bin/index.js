#!/usr/bin/env node

// import program from 'commander'
const program = require('commander')

// import open from 'open'

program
    .version(require('../package').version)
    .usage('<command> [options]')

program
    .command('init')
    .description('initialize config.json')
    .action(() => {
        console.log('initialize config.json')
    })

program.parse(process.argv)