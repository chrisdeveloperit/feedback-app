<script lang="ts">
import { FeedbackStore } from '@/stores';
import type { FeedbackType } from "@/types/FeedbackType";
import Button from "@/ui/Button.svelte"
import RatingSelect from "@/ui/RatingSelect.svelte"

$:feedbackCount = $FeedbackStore.length

   let btnDisabled = true
   let text = ''
   let min = 10
   let rating = 0
   let message = ''
   const handleInput = () => {
      if (text.trim().length <= min) {
         message = `You must type at least ${min} characters`
         btnDisabled = true
      } else {
         message = ""
         btnDisabled = false
      }
   }
   const handleSubmit = () => {
      if(text.trim().length >= min) {
         const newFeedback:FeedbackType = {
            id: feedbackCount + 1,
            rating: +rating,
            text
         }
        // dispatch('feedbackSubmit', newFeedback)
        FeedbackStore.update((currentFeedback) => {
           return [newFeedback, ...currentFeedback]
        })
         text =''
         rating = 0
      }
   }

   const handleSelect = (e) => {
      rating = e.detail
   }
</script>

<header>
   <h2>How Would You Rate Our Service?</h2>
</header>
<form on:submit|preventDefault={handleSubmit}>
   <RatingSelect selected={rating} on:rating-select={handleSelect} />
   
   <div class="input-group">
      <input type="text" on:input={handleInput} bind:value= {text} placeholder="Please tell us why?" />
      <Button type="submit" disabled={btnDisabled}>SUBMIT</Button>
   </div>
   <div class="msg">&nbsp;{ message }</div>
</form>

<style>
   header { max-width: 500px; margin: auto; }
   .msg { color: #ff4500; font-size: 100%;}
   .input-group { border: solid 4px #fff; padding: 1em; border-radius: 4px;}
   input[type="text"] { width: 50%; font-size: 100%; padding: 0.5em; border-radius: 4px;}
</style>