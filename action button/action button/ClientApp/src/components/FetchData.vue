<!-- Parent.vue -->
<template>
  <div>
    <!--
    Listen for `childToParent`: the first parameter of the `$emit` method
    in the child component. We're also listening and reacting to an
    `increment` event - in this case, we increment a counter inline.
    -->
    <custom-multiselect v-for="element in fromChild" :key="element" :initialOption="element.option" v-on:childtoparent="onChildClick($event,element.id)"></custom-multiselect>
  </div>
</template>



<script>
import CustomMultiselect from './CustomMultiselect.vue'
import hierarchy from "../assets/hierarchy.json"
export default {
  data () {
    return {
      myhierarchy: hierarchy,
      count: 0,
      fromChild: [
          { "option": hierarchy.Children, "id": 0 }
        ],
    }
  },
  name: 'about',
  components: {
    CustomMultiselect,
  },
  methods: {
    // Triggered when `childToParent` event is emitted by the child.
    onChildClick (val, index) {
      
      this.fromChild = this.fromChild.filter(el => {
        return el.id <= index
      })
      
      this.fromChild.push({"option": this.getOptions(val), "id":  (++this.count)});
    },
     getOptions(parentSelectOptions) {
        //Récupérer/ génerer les options de la MultiSelectSuivante à partir de parentSelectOptions (l'ancienne)7
        return parentSelectOptions.flatMap(el => el[0].Children)
    },
  }
}
</script>