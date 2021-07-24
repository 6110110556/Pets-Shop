// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require("path")


// Set Global Preprocessor Files
function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/sass/globals/_index.scss")]
    })
}

module.exports = {
  siteName: "CreamHeroes",
  siteUrl: 'https://6110110556.github.io',
  pathPrefix: '/creame-heroes',
  plugins: [
    {
      use: "gridsome-plugin-base-components"
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Post", // Required
        baseDir: "./blog", // Where .md files are located
        pathPrefix: "/blog", // Add route prefix. Optional
        template: "./src/templates/Post.vue", // Optional
        remark: {
          autolinkHeadings: false // disable auto-adding links to headings
        }
      }
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Post", // Required
        baseDir: "./cats", // Where .md files are located
        pathPrefix: "/cats", // Add route prefix. Optional
        template: "./src/templates/Post.vue", // Optional
        remark: {
          autolinkHeadings: false // disable auto-adding links to headings
        }
      }
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Post", // Required
        baseDir: "./dogs", // Where .md files are located
        pathPrefix: "/dogs", // Add route prefix. Optional
        template: "./src/templates/Post.vue", // Optional
        remark: {
          autolinkHeadings: false // disable auto-adding links to headings
        }
      }
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Post", // Required
        baseDir: "./birds", // Where .md files are located
        pathPrefix: "/birds", // Add route prefix. Optional
        template: "./src/templates/Post.vue", // Optional
        remark: {
          autolinkHeadings: false // disable auto-adding links to headings
        }
      }
    },
    {
      use: '@gridsome/source-graphql',
      options: {
        url: 'https://api-ap-northeast-1.graphcms.com/v2/ckrhg2tk90hp501xscqw5797k/master',
        fieldName: 'gcms',
        typeName: 'object',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MjcxMTEzNDAsImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5ncmFwaGNtcy5jb20vdjIvY2tyaGcydGs5MGhwNTAxeHNjcXc1Nzk3ay9tYXN0ZXIiLCJodHRwczovL21hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiJhOWU4MDBmNi0zMTliLTQ5YmYtODQ4Yy00MWFkZDYzOGViNTIiLCJqdGkiOiJja2c4MzVvYXByNGZpMDF3ZTk4amw3ODB0In0.m0Q8-FGN8_djv7YJo_uJNtFUb_5biOyJbrczisKeWY7q6Z2wVu4dwSVmzJVVcJxAifjZqR2CW5mF465URKdqylQ1p9yfYgQshF3hHS-gPfHWTUP4WY70uPRw4TCSOlnCnTEBXz7UHI-i8GvShrA52L6zbqQBzS715gX9HFW7DNgo6wAA0XQi_0v-zR49q3koTDU_6MqEoPZXFoCc7H5E9184_gVr7v5WK66p7MPccLdTjVqgxL0yQzvP8NZVwzWmRKz0tnZc8Gb6GwkQqEZQPh0uqifUwsLVXdGhXbEbTmcIOQsErkNqe_-S5TEM956yFHgYuD4gmey8kGxvLWGYwSEB93qD0aZrYA0FGK69GDzPed1pZwNkIVP_Rqz2RRoJjA_KUjOWjpG8YE8EKbOOhgJh6u0MkZVwJFIwd-hy-IFsstXTrZeNPlTkFjaoI15cjG_ZTwfo7HMpRt0dPukggPhl9YfDfxyxKNWjWEG8342eXhm8NyKgWpkDQ9aLHnCaYxULeMNFCJmvGOOuArC47TnNwN6nJjf7efK-aMxKT1SPaGCJXvl_T9e2SYSpspzbDNgnFtylxHkD2kbzT02Dkqc3zV5tFOHSOSi0TOBakfXlFZgHCWnndOXDP16KclxWFkAPZ4r6Oblypd07iJdSNKAq2m_8wt4gf0Aq9buvKWQ',
        },
      }
    }
  ],
  chainWebpack: config => {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"]
    types.forEach(type => {
      addStyleResource(config.module.rule("scss").oneOf(type))
    })

    // Using SVGs as Components
    const svgRule = config.module.rule("svg")
    svgRule.uses.clear()
    svgRule.use("vue-svg-loader").loader("vue-svg-loader")
  }
}


