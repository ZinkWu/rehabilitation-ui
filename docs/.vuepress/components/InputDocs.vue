<template>
  <r-input v-model="value"></r-input>
</template>

<script>
import Input from '../../../src/input.vue';
export default {
  components: {
    'r-input': Input
  },
  data(){
    return {
      value: 'test'
    }
  }
}
</script>