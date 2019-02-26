<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(value, key) in state.todos" :key="key" >test {{ value.text }}</li>
    </ul>
    <div>
      <ul>
        <li v-for="(value, key) in state.objList" :key="key" > {{ key }} : {{ value }}</li>
      </ul>
    </div>
    <div>{{state.objList.birthday}}</div>
    <div><button @click="mutIncrement()">Mutation Increment ++</button></div>
    <div><button @click="increment()">Increment ++</button></div>
    <div><button @click="decrement()">Decrement --</button></div>
    <div><button @click="incrementRoot()">Init Root (= 10)</button></div>
    <div><button @click="decrementRoot()">Init Root (= 5)</button></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { State, Action, Getter, Mutation } from 'vuex-class'
import { mapState, mapMutations } from 'vuex'
import { incremental } from '@/incremental';

const namespace: string = 'incremental'

@Component({
  methods: {...mapMutations(['increment'])}
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
  @State(state => state) state: any
  // @Action('increment') increment:any
  @Action('decrement') decrement:any
  @Action('increment', { namespace }) incrementRoot:any
  @Action('decrement', { namespace }) decrementRoot:any
  @Mutation('increment', { namespace }) mutIncrement: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
  margin: 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  width: 100%;
}
a {
  color: #42b983;
}
</style>
