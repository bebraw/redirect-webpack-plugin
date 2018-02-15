# redirect-webpack-plugin - Write redirects using webpack

**Usage:**

```javascript
const config = {
  plugins: [
    new RedirectWebpackPlugin({
      redirects: {
        organizers: "/about/",
        presentations: "/speakers/",
        talks: "/speakers/",
      },
    }),
  ]
};
```
