<!-- Parent.vue -->
<template>
  <div v-for="element in fromChild" :key="element">
    {{element.name}}
    <custom-multiselect :initialOption="element.option" v-on:childtoparent="onChildClick($event,element.id)" :key="element.option"></custom-multiselect>
  </div>
</template>



<script>
import CustomMultiselect from './CustomMultiselect.vue'
import hierarchy from "../assets/hierarchy.json"
import clientOrganization from '../assets/clientOrganization'

export default {
  data () {
    return {
      myhierarchy: hierarchy,
      fromChild: [
          { "option": hierarchy.Children,"value": [], "id": 0, "name": "Client" }
        ],
        numberOfMultiselect: 0,
    }
  },
  name: 'about',
  components: {
    CustomMultiselect,
  },
  methods: {
    onChildClick (val, index) { 
      let multiselectOrganization = [];
      if (index == 0) {
      this.fromChild = this.fromChild.filter(el => {
        return el.id <= index
      })}
    val.forEach(el => {
      clientOrganization.forEach( element => {
        if(el.Label == element.Id)
        multiselectOrganization.push(element)
      })
    });
    if (index == 0) {
      this.numberOfMultiselect = this.getNumberOfMultiselect(multiselectOrganization)
    for(let nb = 0 ; nb < this.numberOfMultiselect; nb += 1) {
      
      this.fromChild.push({"option": [], "id":  (nb+1), "name": this.getNameByTier(nb, multiselectOrganization)});
    }}
    if(index < this.numberOfMultiselect) {
      this.fromChild[index+1].option = this.getOptions(val);
      for (let nb = 2; nb <= this.numberOfMultiselect; nb += 1) {
        this.fromChild[nb].option = this.getOptions(this.fromChild[nb-1].option)
      }
    }
    },
     getOptions(parentSelectOptions) {
        return parentSelectOptions.flatMap(el => el.Children)
    },
    getValue(selectedValue) {
      return selectedValue.flatMap(el => el.Path)
    },
    getNumberOfMultiselect(val) {
      let numbermax = 0;
      val.forEach(el => {
        if(numbermax < el.LevelCount)
        numbermax = el.LevelCount
      })
      return numbermax
    },
    getNameByTier(tier, value) {
      let name = [];
      value.forEach(el => {
        if (!name.includes(el.Levels[tier])) {
        name.push(el.Levels[tier])
        }
      })
      name = name.filter(el => el != null)
      name = name.join(' / ')
      return name
    }
  }
}
</script>