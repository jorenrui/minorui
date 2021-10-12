# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [[0.2.0]](https://github.com/jorenrui/minorui/releases/tag/v0.2.0) - 2021-10-12
### Changed
- Migrated `@stitches/react` from v0.1.7 to v1.2.5
- Updated dependencies
- Updated `Note`'s secondary and tertiary types' colors.

## [[0.1.16]](https://github.com/jorenrui/minorui/releases/tag/v0.1.16) - 2021-04-04
### Added
- Add `IdProvider` for SSR
- Add `Separator` component
### Changed
- Center Dropdown Menu's Trigger button

## [[0.1.15]](https://github.com/jorenrui/minorui/releases/tag/v0.1.15) - 2021-04-01
### Added
- Add `Progress` component
- Add whitespace utils (e.g. `m` for margin, `pl` for padding left, etc.)
### Fixed
- Update shadow color of disabled secondary button
### Changed
- Add `number` type to `fgap`

## [[0.1.14]](https://github.com/jorenrui/minorui/releases/tag/v0.1.14) - 2021-03-31
### Added
- Add flexbox gap polyfill via utils. (`fgap`)
### Fixed
- Add scrolling to `TextArea` component
- Update font type in `Note` component
### Changed
- Update stitches from 0.1.0-canary.20 to v0.1.4
- Revert margins of `Headline.Title` and `Headline.SubTitle`

## [[0.1.13]](https://github.com/jorenrui/minorui/releases/tag/v0.1.13) - 2021-03-20
### Fixed
- Add scrolling to `TextArea` component
### Changed
- Update semantic theme colors (e.g. `$accent`, `$info`, etc.)
- Update dialog width on mobile devices
- Update margins of `Headline.Title`
- Update `Headline.SubTitle` to `textTransform: 'uppercase'`,

## [[0.1.12]](https://github.com/jorenrui/minorui/releases/tag/v0.1.12) - 2021-03-15
### Added
- Add and export Visually Hidden from Radix UI
- Add loading text to loading button
- Add Link component (variants: color, size, etc.)
- Add display variant to Box
- Add visually hidden text to spinner
### Changed
- Update min width of dialog
- Update background color of accent button
- Update `stitches` to v0.1.0-canary.20

## [[0.1.11]](https://github.com/jorenrui/minorui/releases/tag/v0.1.11) - 2021-03-11
### Fixed
- Update Spinner size in loading button

## [[0.1.10]](https://github.com/jorenrui/minorui/releases/tag/v0.1.10) - 2021-03-11
### Changed
- Update Spinner sizes

## [[0.1.9]](https://github.com/jorenrui/minorui/releases/tag/v0.1.9) - 2021-03-10
### Added
- Add Headline component
- Export Accessible Icon from Radix UI
- Add acknowledgment to Hero Icons in README.md
### Changed
- Update stitches from `0.1.0-canary.12` to `0.1.0-canary.17`
### Fixed
- Add `as` prop to dialog title

## [[0.1.8]](https://github.com/jorenrui/minorui/releases/tag/v0.1.8) - 2021-03-01
### Added
- Add variants to Dialog.Root
- Add Note component (variants: type and size)
- Add polymorphic to all components
### Changed
- Update semantic colors (eg. `info: blue700` => `info: blue500`)
### Fixed
- Update Dialog footer's display
### Removed
- Remove variants exports

## [[0.1.7]](https://github.com/jorenrui/minorui/releases/tag/v0.1.7) - 2021-03-01
### Added
- Add X Icon
### Changed
- Update Dialog styles
  - Add Footer
  - Add Buttons
### Fixed
- Update Dropdown Menu Item base and hover color

## [[0.1.6]](https://github.com/jorenrui/minorui/releases/tag/v0.1.6) - 2021-02-28
### Added
- Dropdown Menu
  - Add active variant
- Export Theme
- Add Dialog
### Changed
- Update Heading sizes

## [[0.1.5]](https://github.com/jorenrui/minorui/releases/tag/v0.1.5) - 2021-02-28
### Added
- Add Dropdown Menu
- Add Container

## [[0.1.4]](https://github.com/jorenrui/minorui/releases/tag/v0.1.4) - 2021-02-28
### Added
- Add Clickable Div
  - Add type variant
- Label
  - Add size variant
  - Add color variant
### Changed
- Update heading size variants' font weights
- Update button padding
- Rename button's size variants

## [[0.1.3]](https://github.com/jorenrui/minorui/releases/tag/v0.1.3) - 2021-02-27
### Added
- TextArea
  - Add variant
  - Add size variant
### Changed
- Export CSS type
- Relocate Variant exports

## [[0.1.2]](https://github.com/jorenrui/minorui/releases/tag/v0.1.2) - 2021-02-27
### Added
- Conditions
  - Add xs condition
  - Add down and up conditions
- Text
  - Add color variant
- Heading
  - Add color variant
- Input
  - Add variant
  - Add size variant
### Fixed
- Fix import in example

## [[0.1.1]](https://github.com/jorenrui/minorui/releases/tag/v0.1.1) - 2021-02-23

### Minorui (A work in progress)

A React UI component library with a minimal design. The official design system for [Sutle](https://sutle.io).

Components are created using [Radix](https://radix-ui.com), styled using [Stitches](stitches.dev/) and utils/primitives inspired from [TailwindCSS](https://tailwindcss.com/).

#### Installation

Install `Minorui` using [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/):

```bash
# Using NPM
npm install --save minorui

# Using Yarn
yarn add minorui
```

#### Usage

```jsx
import { Heading } from 'minorui';

...

<Heading>
  Hello World
</Heading>
```

## [[0.1.0]](https://github.com/jorenrui/minorui/releases/tag/v0.1.0) - 2021-02-23

### Minorui (A work in progress)

A React UI component library with a minimal design. The official design system for [Sutle](https://sutle.io). Initial pre-release of Minorui.