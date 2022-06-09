<script lang="ts">
import FeedbackList from './components/FeedbackList.svelte';
import FeedbackStats from './components/FeedbackStats.svelte';
import FeedbackForm from './components/FeedbackForm.svelte';

</script>

<main class="container">
   <FeedbackForm />
   <FeedbackStats />
   <FeedbackList />
</main>

<style>
   main { font-family:Verdana, Geneva, Tahoma, sans-serif}
</style>