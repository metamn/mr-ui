## Frameworks

Integrating the UI library with other front-end and backend frameworks like Gatsby, WordPress and co.

### Gatsby with WordPress

- The WP starter theme works fine: https://github.com/metamn/gatsby-wordpress
- But it has limitations:
 - It's bloated with Bulma
 - Can't handle nested paths like `category\design`

### Next.js (or else) with WordPress

- REST API is very very slow: [article on Smashing Magazine, Oct 2018](https://www.smashingmagazine.com/2018/10/headless-wordpress-decoupled/)
- [WPGraphpQL might be faster](https://spectrum.chat/wpgraphql?thread=a381d46d-726e-4e6f-892b-abe4b17ca259)
- Not ready yet for prime time:
 - Plugins might not work well
 - Deploying might take minutes
 - There is no Post Preview in admin
 - Sometimes strings has to be reformatted otherwise the input is like `my &#82714; post title`
 - You should replicate the original sitemap on the front-end
 - Shortcodes and Media embeds are processed real time, so they'll have to be done manually on the front-end


### Resources

- [Should I start using headless WordPress for client projects?](https://hashnode.com/post/should-i-start-using-headless-wordpress-for-client-projects-cjbm117dd011h5ewtca8nh5t3)
- [Gotchas and Limitations with Headless Wordpress](https://indigotree.co.uk/how-use-wordpress-headless-cms/)
- [An overview of the Headless CMS scene, Dec 2018](https://docs.google.com/spreadsheets/d/1AmrfMT6a-tT9x4nR__RumuCcT6NedxliFf-76Ocv2pQ/edit?usp=sharing)
