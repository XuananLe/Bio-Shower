<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  function navigateToLogin() {
    goto("/login");
  }
</script>

<div class="flex items-center justify-center h-screen w-screen">
  <ul class="steps">
    <li class = "step step-primary"><a href="/login">Register</a></li>
    
    <li class="step" class:step-primary={$page.route.id?.match(/username|photo/g)}>
      <a
        href="/login/photo"
    
      >
        Upload Photo</a
      >
    </li>

    <li class="step" class:step-primary={$page.route.id?.includes("username")}>
      <a
        href="username"
        >Username</a
      >
    </li>
  </ul>
</div>

<slot />
