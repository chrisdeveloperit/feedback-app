
<script lang="ts">
import RadioCustom from "./RadioCustom.svelte";
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

   export let selected = 9
   let numOptions = 10
   const Changed = (event) => {
      selected = event.detail.select
      dispatch('rating-select', selected)
   }
</script>

<RadioCustom {selected} {numOptions} on:selectNum={ Changed } />
