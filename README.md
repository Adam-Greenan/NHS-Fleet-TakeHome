
==========================

Overview

Implements a small slice of a, what could be, larger application.

- clear separation of concerns for scaleabiltiy and testing
- thin ui components
- minimal deps
- structure that would survive being in a long lived system

==========================

Getting started

npm i
npm run dev

==========================

Tech stack

React
Vite
Typescript
Vitest
React Testing Library
Storybook
Tailwind
React Dom Router

==========================

Testing

Run units tests: npm run test -- --project unit
Run storybook tests: npm run test -- --project storybook

Run all tests: npm run test

==========================

Architexture

src/
  domain/
    events/            Pure business logic
  features/
    events/
      screens/         Route-level screen components
      EventList/       Presentational components
  hooks/               Feature hooks
  helpers/             Shared utilities

==========================

Notes

- Could have expanded upon testing, analytics and made the app look a little better
- Decided to use as least amount of packages, when building a monolith its best to not rely heavily on packages that could deprecate, but if needed put into a wrapper for easy swapping out in future
- Could have added an api section where I mocked the return values
- Searching could have used fuzzy search like fuse, but again packages - also we could move to server-side as the data expands
- UI would be exanded upon via storybook
