<template>
  <layout>
    <div>
      <DogShop />
    </div>
  </layout>
</template>


<script>
import DogShop from "@/components/DogShop.vue"

export default {
  components: {
    DogShop,
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


