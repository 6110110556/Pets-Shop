// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// module.exports = function (api) {
//   api.loadSource(({ addCollection }) => {
//     // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
//   })

//   api.createPages(({ createPage }) => {
//     // Use the Pages API here: https://gridsome.org/docs/pages-api/
//   })
// }

module.exports = function (api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
    {
      gcms {
        products {
          id
          name
          description 
          categories{
            name
          }
          price
          images {
            url
          }
          slug
        }

        productCats {
          id
          name
          description 
          categories{
            name
          }
          price
          images {
            url
          }
          slug
        }

        productDogs {
          id
          name
          description 
          categories{
            name
          }
          price
          images {
            url
          }
          slug
        }

        productBirds {
          id
          name
          description 
          categories{
            name
          }
          price
          images {
            url
          }
          slug
        }
      }
    }
  `);
    data.gcms.products.forEach(node => {
      createPage({
        path: `/product/${node.id}`,
        component: './src/pages/Index.vue',
        context: {
          id: node.id,
          name: node.name,
          description: node.description,
          price: node.price,
          images: node.images,
          slug: node.slug,

          // categories: node.categories

        },
      });
    });

    data.gcms.productCats.forEach(node => {
      createPage({
        path: `/product/${node.id}`,
        component: './src/pages/Index.vue',
        context: {
          id: node.id,
          name: node.name,
          description: node.description,
          price: node.price,
          images: node.images,
          slug: node.slug,
        },
      });
    });

    data.gcms.productDogs.forEach(node => {
      createPage({
        path: `/product/${node.id}`,
        component: './src/pages/Index.vue',
        context: {
          id: node.id,
          name: node.name,
          description: node.description,
          price: node.price,
          images: node.images,
          slug: node.slug,
        }
      })
    })

  });



};
