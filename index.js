#!/usr/bin/env node
'use strict'

const cli = require('./lib/cli')

cli(process.argv)
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
