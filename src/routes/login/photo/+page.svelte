<script lang="ts">
  import type { PageData } from "./$types";
  import { user } from "$lib/firebase";
  import AuthCheck from "$lib/Components/AuthCheck.svelte";

</script>
<AuthCheck>
  <form class="max-w-screen-md w-full">
    <div class="form-control w-full max-w-xs my-10 mx-auto text-center">
      <img alt="photoURL" width="256" height="256" class="mx-auto" />
      <label for="photoURL" class="label">
        <span class="label-text">Pick a file</span>
      </label>
      <input
        name="photoURL"
        type="file"
        class="file-input file-input-bordered w-full max-w-xs"
        accept="image/png, image/jpeg, image/gif, image/webp"
      />
    </div>
  </form>
    
</AuthCheck>

<!-- <a {href} class="btn btn-primary"> Finish </a> -->
