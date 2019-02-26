<template>
  <div>
    Counter {{state.counter}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class Counter extends Vue {
  @State(state => state) state: any
}
</script>

<style scoped>

</style>
