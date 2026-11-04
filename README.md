# Kyoto Trip Planner — Editable SVG Icons

This folder contains editable, scalable SVG icons used by the Kyoto trip planner UI.

## Included
- Airbnb-style brand mark
- Search, location, calendar, clock and utensils
- Tag, heart, send and plus
- Help, user, sparkles and message
- Arrow, chevrons, close, menu and filter

## Use in Next.js
Copy the `icons` folder into your project's `public` directory:

```text
public/
  icons/
    search.svg
    location.svg
    calendar.svg
    ...
```

Reference an icon in JSX like this:

```tsx
<img src="/icons/location.svg" alt="" width={18} height={18} />
```

For inline SVG editing, open any `.svg` file in VS Code. The paths, stroke width, dimensions and colors can be changed directly. Icons use `currentColor`, so when inlining the SVG markup in React, set the CSS `color` on the parent or replace `currentColor` with a fixed color.

All icons are vector SVG files, not raster images.
