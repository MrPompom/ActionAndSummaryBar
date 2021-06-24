<template>
<div>
    <multiselect v-model="value"
                :options="option"
                mode="tags"
                :searchable="true"
                placeholder="Tous"
                label="Label"
                valueProp="Path"
                :createTag="false"
                @change="getChildrensFromPath">
    </multiselect>
</div>
</template>

<script>
import Multiselect from '@vueform/multiselect'

export default {
 name: 'CustomMultiselect',
        props: {

            initialOption: {
                type: Array,
            },
        },
 components: {
     Multiselect,
 },
 data: function() {
   return  {
       value: [],
       option: this.initialOption,
  }
 },
 methods: {
     getChildrensFromPath: function(val) {
        
          let clientChildren = val.map(singleValue => 
            this.option.filter(objOption => {
                return objOption.Path === singleValue 
            })
         )
         this.$emit('childtoparent', clientChildren)
     }
 }
}


</script>