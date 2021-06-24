<!-- Child.vue -->
<template>
  <div>
    <!-- Simplest - call `$emit()` inline-->
    

    <!-- set a variable then trigger a method which calls `$emit()` -->

    <input id="child-input" type="text" name="msg" v-model="childMessage" @input="emitToParent">
  </div>
</template>
<script>
export default {
  data() {
    return {
      childMessage: []
    }
  },
  name: 'Child',
  methods: {
    // Define the method that emits data to the parent as the first parameter to `$emit()`.
    // This is referenced in the <template> call in the parent. The second parameter is the payload.
    emitToParent (event) {
      this.$emit('childtoparent', this.childMessage)
    }
  }
}
</script>