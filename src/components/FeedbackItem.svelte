<script lang="ts">
 //  import { createEventDispatcher } from 'svelte';
   import { FeedbackStore } from '@/stores';
   import type { FeedbackType } from '@/types/FeedbackType'
   import Card from '@/ui/Card.svelte'

   export let item: FeedbackType

  // const dispatch = createEventDispatcher()

   const handleDelete = (itemid) => {
     // dispatch('delete-feedback', itemid)
     FeedbackStore.update((currentFeedback) => {
        return currentFeedback.filter(item => item.id != itemid)
     })
   }
</script>

<Card> 
   <div class="num-display">{item.rating}</div>
   <button class="close" on:click={ () => handleDelete(item.id)}>x</button>
   <p class="text-display">{item.text}</p>
</Card>

<style>
   .num-display {
      position:absolute;
      top: -10px;
      left: -10px;
      width: 40px;
      height: 40px;
      background-color:#6c23b1;
      color: #fff;
      border: 2px #87ecf5 solid;
      border-radius: 50%;
      padding: 10px;
      text-align: center;
      font-size: 20px;
   }
   .close {
      position:absolute;
      top: 10px;
      right: 20px;
      cursor: pointer;
      min-width: 22px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      padding: 2px;
      font-weight: bold;
   }

</style>