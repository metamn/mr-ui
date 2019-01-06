## Images

Images are a large, always evolving subject in web development. From capturing screenshots automatically to displaying them responsively without flipping the page on loading &mdash; perhaps with placeholders &mdash; the list grows.

On a blog like [Beat](http://metamn.io/beat/) where screenshots of webpages are taken for design inspiration the manual process is tedious and slow.

1. Select the best part of the website to be screenshoted.
2. Create both portrait and landscape screenshots with large resolution.
3. Resize them to lower resolutions for mobile and tablet displays.
4. Optimize them with compression.
5. Embed images in content
6. Display responsively without page flicking on page loading
7. Make sure tens of images don't slow the page.

To automate the process with tools and services 3. - 7. are well covered, for 2. there are tools which might not be able to fulfill automatically 1.

For 3. - 7. Gatsby provides full, integrated coverage using industry best practices. Picking its parts apart and applying to plain React components maybe makes no sense, for now.

If one runs a React production-ready site perhaps it does with Gatsby or Next. Either these frameworks or the backend (Contetful & co) is handling image optimization and delivery. 

## Screenshots

- https://zeit.co/blog/serverless-chrome
- https://github.com/vladocar/screenshoteer
- https://www.gatsbyjs.org/packages/gatsby-transformer-screenshot/?=screenshot

```bash
screenshoteer --fullpage false --url http://metamn.io/beat/ --w 1920 --h 1080
```

How to tell screenshoter to start at 153px from top?

### Resizing, optimizing, embedding

https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/?=image
https://www.gatsbyjs.org/packages/gatsby-remark-images/?=image
