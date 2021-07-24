<template>
  <div class="shoppy">
    <h1>birds</h1>
    <div>
      <div v-if="$page.gcms.products" class="product-grid text-center">
        <div class="text-center">
          <div class="post-feed">
            <div v-for="product in products" :key="product.id" class="flex-col">
              <b-card-group deck>
                <b-card
                  v-for="images in product.images"
                  :title="product.name"
                  :img-src="images.url"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem; padding: 20px; max-height: 45rem; min-height: 45rem"
                  class="text-center"
                >
                  <b-card-text>
                    <h5>{{ product.price }} ฿.</h5>
                    {{ product.description }}
                  </b-card-text>
                  <template #footer>
                    <b-button href="#" variant="primary">Add Card</b-button>
                  </template>
                </b-card>
              </b-card-group>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    this.products = this.$page.gcms.productBirds
  },
}
</script>
