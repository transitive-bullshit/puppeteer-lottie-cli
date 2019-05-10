#!/usr/bin/env node
'use strict'

const program = require('commander')

const renderLottie = require('puppeteer-lottie')
const { version } = require('../package')

module.exports = async (argv) => {
  program
    .name('puppeteer-lottie')
    .version(version)
    .usage('[options]')
    .option('-i, --input <path>', 'relative path to the JSON file containing animation data')
    .option('-o, --output <path>', 'relative path to store output media (image, image pattern, gif, or mp4)', 'out.png')
    .option('-w, --width <number>', 'optional output width', (s) => parseInt(s))
    .option('-h, --height <number>', 'optional output height', (s) => parseInt(s))
    .option('-q, --quiet', 'Disable output progress', false)

  program.on('--help', () => {
    console.log()
    console.log('Output must one of the following:')
    console.log('  - An image to capture the first frame only (png or jpg)')
    console.log('  - an image pattern (eg. sprintf format \'frame-%d.png\' or \'frame-%012d.jpg\')')
    console.log('  - an mp4 video file (requires FFmpeg to be installed)')
    console.log('  - a GIF file (requires Gifski to be installed)')
    console.log()
    console.log('Examples:')
    console.log('  $ puppeteer-lottie -i fixtures/bodymovin.json -o out.mp4')
    console.log('  $ puppeteer-lottie -i fixtures/bodymovin.json -o out.gif --width 640')
    console.log('  $ puppeteer-lottie -i fixtures/bodymovin.json -o \'frame-%d.png\' --width 1024 --height 1024')
  })

  program.parse(argv)

  const opts = {
    path: program.input,
    output: program.output,
    width: program.width,
    height: program.height,
    quiet: program.quiet
  }

  if (program.args.length > 0) {
    console.error('invalid extra arguments')
    program.help()
    process.exit(1)
  }

  await renderLottie(opts)
}
