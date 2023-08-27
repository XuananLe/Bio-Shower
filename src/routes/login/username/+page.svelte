<script lang="ts">
  import { user } from "$lib/firebase";
  import AuthCheck from "$lib/Components/AuthCheck.svelte";
</script>

<AuthCheck>
  <input
    type="text"
    placeholder="Type here"
    class="input input-bordered w-full max-w-xs"
  />
</AuthCheck>
