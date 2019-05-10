# puppeteer-lottie-cli

> CLI for rendering [Lottie](http://airbnb.io/lottie) animations via [Puppeteer](https://github.com/GoogleChrome/puppeteer) to image, GIF or MP4.

[![NPM](https://img.shields.io/npm/v/puppeteer-lottie-cli.svg)](https://www.npmjs.com/package/puppeteer-lottie-cli) [![Build Status](https://travis-ci.com/transitive-bullshit/puppeteer-lottie-cli.svg?branch=master)](https://travis-ci.com/transitive-bullshit/puppeteer-lottie-cli) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<p align="center">
  <img width="100%" alt="Logo" src="https://raw.githubusercontent.com/transitive-bullshit/puppeteer-lottie/master/media/logo.gif">
</p>

This CLI is also available as a [library](https://github.com/transitive-bullshit/puppeteer-lottie).

## Install

```bash
npm install -g puppeteer-lottie-cli
```

If you want to generate **GIFs**, you must also install [gifski](https://gif.ski/). On macOS, you can run:

```bash
brew install gifski
```

If you want to generate **MP4s**, you must also install [ffmpeg](https://ffmpeg.org/). On macOS, you can run:

```bash
brew install ffmpeg
```

## Usage

```bash
Usage: puppeteer-lottie [options]

Options:
  -i, --input <path>     relative path to the JSON file containing animation data
  -o, --output <path>    relative path to store output media (image, image pattern, gif, or mp4) (default: "out.png")
  -w, --width <number>   optional output width
  -h, --height <number>  optional output height
  -q, --quiet            disable output progress
  -V, --version          output the version number
  -h, --help             output usage information

Output must one of the following:
  - An image to capture the first frame only (png or jpg)
  - an image pattern (eg. sprintf format 'frame-%d.png' or 'frame-%012d.jpg')
  - an mp4 video file (requires FFmpeg to be installed)
  - a GIF file (requires Gifski to be installed)

Examples:
  $ puppeteer-lottie -i fixtures/bodymovin.json -o out.mp4
  $ puppeteer-lottie -i fixtures/bodymovin.json -o out.gif --width 640
  $ puppeteer-lottie -i fixtures/bodymovin.json -o 'frame-%d.png' --width 1024 --height 1024
```

#### Output Size

If you don't pass `width` or `height`, the animation's intrinsic size will be used, and if that doesn't exist it will use 640x480.

If you pass `width` or `height`, the other dimension will be inferred by maintaining the original animation's aspect ratio.

If both `width` and `height` are passed, the output will have those dimensions, but there will be extra whitespace (or transparency if rendering PNGs) due to `lottie-web`'s default `rendererSettings.preserveAspectRatio` of `xMidyMid meet` ([docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio) and [demo](https://codepen.io/giodif/pen/VYpaeo)).

For `mp4` outputs, the height may be different by a pixel due to the `x264` encoder requiring even heights.

## Compatibility

All [lottie-web](https://github.com/airbnb/lottie-web) features should be fully supported by the `svg`, `canvas`, and `html` renderers.

This includes all of the animations on [lottiefiles.com](https://lottiefiles.com/)! 🔥

Also see Lottie's full list of [supported features](https://airbnb.io/lottie/#/supported-features).


## Related

-   [puppeteer-lottie](https://github.com/transitive-bullshit/puppeteer-lottie) - Library for this CLI.
-   [puppeteer](https://github.com/GoogleChrome/puppeteer) - Headless Chrome Node API.
-   [awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer) - Curated list of awesome puppeteer resources.
-   [lottie](http://airbnb.io/lottie) - Render After Effects animations natively on Web, Android and iOS, and React Native.

## License

MIT © [Travis Fischer](https://transitivebullsh.it)
