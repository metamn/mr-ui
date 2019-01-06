## Font loading with `webfontloader`

### FOUT with a Class

Use the CSS Font Loading API with a polyfill to detect when a specific font has loaded and only apply that web font in your CSS after it has loaded successfully. Usually this means toggling a class on your <html> element. Use with SASS or LESS mixins for easier maintenance.

- Demo: FOUT with a Class (includes sessionStorage trick for repeat view optimization)
- Read more: Better @font-face with Font Load Events on Dev.Opera and Font Loading Revisited with Font Events on the Filament Group Lab

#### Pros
- Rendering performance: Eliminates FOIT. This method is tried and tested. It’s one of the approaches recommended by TypeKit.
- Flexibility: Easy to group requests into a single repaint (use one class for multiple web font loads)
- Scalability: Requests happen in parallel
- Robust: if the request fails, fallback text is still shown.
- Hosting: Works independent of font loader (easy to implement with third party hosts or with existing @font-face blocks)
- Great browser support, polyfills typically work everywhere that web fonts are supported.
- Future friendly: polyfills aren’t coupled to font formats and should work with existing @font-face blocks. That means when a new format comes out, you can just change your @font-face as normal.
- Does not require modification of the fonts (through subsetting or otherwise). Very license friendly.

#### Cons

- Requires strict maintenance/control of your CSS. A single use of a web font font-family in your CSS without the guarding loaded class will likely trigger a FOIT.
- Typically requires you to hard code which web fonts you want to load on the page. This can mean that you end up loading more web font content than a page needs. Remember that with unceremonious @font-face usage, newer browsers only download web fonts that are actually used on your page. This is given to you for free. This is why the New York Times can get away with 100 different @font-face blocks on their home page—the browser only downloads a fraction of those. With this approach, you must tell the browser which fonts to download independent of usage.

#### Verdict

This is the baseline standard. This will work for most use cases.
