# Minoru

A React UI component library with a minimal design. The official design system for [Sutle](https://sutle.io).

## Usage

You can apply the styles using the class name:
```jsx
import { heading } from 'minoru';

...

<h1 className={heading()}>
  Hello World
</h1>
```

Or use the styled component:

```jsx
import { Heading } from 'minoru';

...

<Heading>
  Hello World
</Heading>
```

## Inspirations/Acknowledgements

### [Tailwind CSS](https://tailwindcss.com/)

I'm not really that great of a thinker when it comes to theme or creating a design system. That is why I decided to use some of Tailwind's styles to built my own custom components. Minoru uses the theming from Tailwind CSS (colors, font sizes, breakpoints, etc.).

### [Radix](https://radix-ui.com/)

I don't really want to reinvent the wheel when it comes to accessibility so I used Radix UI for that.

### [Stitches](stitches.dev/)

A styling library that I am really a fan of. I really love how you can add variants to the styled components. You must check this out 👀
