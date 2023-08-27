<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  function navigateToLogin() {
    goto("/login");
  }
</script>

<nav class="flex justify-center my-6">
  <ul class="steps">
    <a href="/login" class="step step-primary">Sign In</a>
    <a
      href="/login/username"
      class="step"
      class:step-primary={$page.route.id?.match(/username|photo/g)}>
      Choose Username
    </a>
    <a
      href="/login/photo"
      class="step"
      class:step-primary={$page.route.id?.includes("photo")}>
      Upload Photo
    </a>
  </ul>
</nav>

<slot />
