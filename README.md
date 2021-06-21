# My Portfolio
[![Netlify Status](https://api.netlify.com/api/v1/badges/9859c886-9b0c-4891-b7cb-0f3229d3871a/deploy-status)](https://app.netlify.com/sites/theoclapperton-portfolio/deploys)

## Live
- Currently being deployed at https://theoclapperton-portfolio.netlify.app/


## Adding a new project
1. Create the display banner
2. Upload the banner to this repo in the `/src/img/` directory
3. Import the banner in the `/src/data/data.js` file
4. At the bottom of `/src/data/data.js` file add the following code block
   ```json
    {
        header: "PLACEHOLDER_NAME",
        header_sub: "PLACEHOLDER_SUB",
        image: PLACEHOLDER_IMAGE,
        tags: ["PLACEHOLDER", "PLACEHOLDER"],
        slug: "PLACEHOLDER_SLUG",
        readme: "PLACEHOLDER_README_LOCATION"
    },
```
 

## Resources
- https://elfsight.com/portfolio-widget/examples/
- https://react.semantic-ui.com/
- https://reactrouter.com/web/guides/quick-start
