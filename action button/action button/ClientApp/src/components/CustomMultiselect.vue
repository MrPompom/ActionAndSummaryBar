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
            initialValue: {
                type: Array,
            },
            initialOption: {
                type: Array,
            },
        },
 components: {
     Multiselect,
 },
 data: function() {
   return  {
       value: this.initialValue,
       option: this.initialOption,
  }
 },
 methods: {
     getChildrensFromPath: function(val) {        
          let clientChildren = val.flatMap(singleValue => 
            this.option.filter(objOption => {
                return objOption.Path === singleValue 
            })
         )
         this.$emit('childtoparent', clientChildren)
     }
 },
 mounted() {
     if (this.initialValue.length > 0) {
         let clientChildren = this.initialValue.flatMap(singleValue => 
            this.option.filter(objOption => {
                return objOption.Path === singleValue 
            })
         )
         this.$emit('childtoparent', clientChildren)
     }
     
 },
}
</script>