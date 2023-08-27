<script lang="ts">
  import { user } from "$lib/firebase";
</script>

{#if $user}
  <slot />
{:else}
  <p class="text-error my-10">
    You allow to view these content unless you logined
    <br />
    <button class = "btn "> <a href="/login" class="text text-primary-focus">Login</a> </button>
  </p>
{/if}
