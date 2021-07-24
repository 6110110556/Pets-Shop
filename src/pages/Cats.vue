<template>
  <layout>
    <div>
      <CatShop />
    </div>
  </layout>
</template>


<script>
import CatShop from "@/components/CatShop.vue"

export default {
  components: {
    CatShop,
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


