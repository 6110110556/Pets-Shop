<template>
  <layout>
    <div>
      <BirdShop />
    </div>
  </layout>
</template>

<script>
import BirdShop from "@/components/BirdShop.vue"

export default {
  components: {
    BirdShop,
  },
}
</script>

<page-query>
  {
    gcms{
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
</page-query>


