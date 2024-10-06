This is a an assignment for In The Pocket. It it also deployed here on Vercel (easiest way with a NextJS project)
[https://itp-case-web-24.vercel.app/](https://itp-case-web-24.vercel.app/)

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can run all the tests with:

```bash
pnpm test
```

You can check for linting errors

```bash
pnpm lint
```


## Testing
Vitest was being used as a test runner. It was the first time I used it, the reason for this choice is because a lot of stuff is already preconfigured. No more configuration hell if you are using Typescript, non js assets (css, img, etc) or ESM issues. 
RTL was used as a library for testing. (Enzyme is dead and RTL is more about user actions testing that just the code, more realistic)
Vitest has access to Jest Assertion API using testing-library/jest-dom dependency, so stuff like .toBeInTheDocument() can be used
msw was used to mock api calls. It intercepts the api call and then you can mock the response of that call. 


## Other dependencies
Fontawesome for icons
React-spinners for loading spinner
