<script lang="ts">
   import { createEventDispatcher } from 'svelte'
   export let selected = 10
   export let numOptions = 5

  const dispatch = createEventDispatcher()
  const forwardEvent = (e) => {
      selected = e.currentTarget.value
      dispatch('selectNum', {select: selected})
   }
</script>

<ul class="rating">
   {#each Array(numOptions) as num, i}
      <li>
         <input type="radio" id="num{i+1}" name="rating" value="{i+1}" 
         on:change={forwardEvent} checked={selected === num} />
         <label for="num{i+1}">{i+1}</label>
      </li>
   {/each}
</ul>

<style>
   .rating {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 30px 0;
   }

   .rating li {
      position: relative;
      background: #f4f4f4;
      width: 50px;
      height: 50px;
      margin: 2px;
      padding: 8px;
      text-align: center;
      border-radius: 50%;
      font-size: 19px;
      border: 3px #87ecf5 solid;
      transition: 0.3s;
   }

   .rating li label {
      position:absolute;
      top: 50%;
      left: 50%;
      width: 50px;
      height: 50px;
      padding: 30% 10px 0 10px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
   }

   .rating li:hover { background: #ff6a95; color: #fff; }

   [type='radio'] { opacity: 0;}

   [type='radio']:checked ~ label { background: #ff6a95; color: #fff; }

</style>