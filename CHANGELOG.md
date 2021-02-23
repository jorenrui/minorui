# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [[0.1.0]](https://github.com/jorenrui/minoru/releases/tag/v0.1.0) - 2020-02-23

### Minoru UI (A work in progress)

A React UI component library with a minimal design. The official design system for [Sutle](https://sutle.io).

Initial pre-release of Minoru UI. Components are created using [Radix](https://radix-ui.com), styled using [Stitches](stitches.dev/) and utils/primitives inspired from [TailwindCSS](https://tailwindcss.com/).

#### Installation

Install `Minoru UI` using [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/):

```bash
# Using NPM
npm install --save minoru

# Using Yarn
yarn add minoru
```

#### Usage

```jsx
import { Heading } from 'minoru';

...

<Heading>
  Hello World
</Heading>
```

#### Initial Components
- Box
- Button (variants: size, width, shape, kind, color)
- Card
- Heading (variants: overflow, size)
- Text (variants: overflow, size)
- Spinner (variants: color, size)
- Input
- TextArea
- Label
- Skeleton (variants: display, type)
