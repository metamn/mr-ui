## Colors

A quick study on colors for user interfaces. Built bottom up, kept as minimal as possible.

## The basic need

We need at least two colors to have an UI. A text color and the background color.

These can be easily chosen; we just have to be sure their color contrast ratio is good enough to be legible, visible for all kind of audiences, even for those with visual impairments.

Two colors are good enough for a blog.

When more content types are present &mdash; buttons for call to action; multiple visual sections like hero, features, testimonials &mdash; two colors might not be enough.

## A monochromatic palette

With two colors we get additionally another good few color combinations. First an inverted color scheme, then a lot others in between.

These combinations could be well enough for a basic landing page or a simple marketing site.

Hero is set with inverted colors, the button / call to action on hero with the default colors.
Later, less important sections can have in between colors, such as gray in the case of black / white primary colors.

## +1 color

It's so refreshing to break out a monochromatic color scheme with a vivid call to action button. That's why user interfaces tend to be built on more than two colors.

When a new color is added to the two basic colors the need is either to dominate them, or be dominated by them.

A call to action should dominate the existing color scheme by bringing its content forward, closer to the viewer.

A less important content section should sink in the background with a dominated color.

Theory says warm colors dominate, cool colors sink. On the classic color wheel warm colors are on the left: red, orange, yellow &mdash; cool colors on the right: violet, blue, green.

## Color properties

To pick the perfect red for an existing monochromatic color scheme we might need math. There are tons of reds &mdash; based on which criteria one can affirm *that* red is the perfect red for this scheme?

To make colors quantifiable color models and color spaces like RGB or CMYK are used.

Each model describes every color with certain properties like:

- Luminosity - an absolute property
- Temperature - an absolute property
- Saturation - a relative property describing how many `gray` is in the color
- Lightness - a relative property describing how many `white` and `black` is in the color
- Contrast - a relative property to a third color

With these properties the *perfect red* can be reformulated to *a red with the same saturation and lightness as the current color scheme, and, with a 4.5 contrast to the background color*.

Color models can be specially tailored to mediums like print (Pantone, CMYK) or monitor screens (RGB, HSL). And they might present surprises. In CMYK `blue` mixed with `yellow` gives `green`, in RGB gives `gray`.

It's important to choose a suitable color model for screen user interfaces.

## An ideal tool

### Computable color model

An ideal tool to create a perfect color scheme would first of all come with a computable, programmable color model.

One should be able to use code to generate a consistent color palette, and think about colors in the same way thinks about other programming artifacts like data and algorithms.

### Preloaded content types

An ideal tool should come preloaded with different content types. For a simple blog, for a simple landing page, for a full product marketing site, and so on.

With them a live test can be performed to see how a color scheme works.

Graphic artists have their own tools like [Adobe Color Wheel](https://color.adobe.com/create/color-wheel/) which might be great to design posters and flyers but surely not intuitive enough to design text based user interfaces.

[Paletton](http://paletton.com/) recognized this flaw and added a feature to preview a palette in a real webpage scenario. However, it's awful.

[Google Color Tool](https://material.io/tools/color/) is far better. It's a good start but gives not enough details.

### Monochromatic palette generator

Once we've picked up the two primary colors we should be able to see how many additional color pairs we've get with these colors.

Google's Color Tool gives us two hints (Light, Dark) but there is more play here.

### A special color wheel

Finally we need a color wheel to help us choose warm and cold colors additional to our existing monochromatic scheme.

Paletton has such a fine tune mechanism for the generated palette but not to set the color wheel into a state where only corresponding new colors can be picked up.


### Resources

- http://metamn.io/colord/
- https://github.com/metamn/color
- [Adobe Color](https://color.adobe.com/create/color-wheel/)
- [Paletton](http://paletton.com/)
- [Google Material Design Color Tool](https://material.io/tools/color)
