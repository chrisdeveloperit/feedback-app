<script lang="ts">
   export let style = 'primary'
   export let type = 'button'
   export let disabled = false
</script>

<button {type} {disabled} class={style}>
   <slot></slot>
</button>

<style>
   button {
      width: 100px;
      border: solid 1px #fff;
      border-radius: 4px;
      color: #fff;
      margin: 0.5em;
      padding: 0.5em;
   }
   button:disabled { background-color: #888; }
   .primary { background-color: #6c23b1; }
   .secondary { background-color: #ff6a95;}
</style>