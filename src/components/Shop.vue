<template>
  <div class="shoppy">
    <h1>Showcase</h1>
    <h1>{{products}}</h1>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Home Page",
  },
  data() {
    return {
      products: [
        {
          name: "",
          description: "",
          categories: {
            name: "",
          },
          price: "",
          images: [
            {
              url: "",
            },
          ],
          slug: "",
        },
      ],
    }
  },
  created() {
    this.products = this.$page.gcms.productDogs
  },
}
</script>
