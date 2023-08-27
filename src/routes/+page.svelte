<script>
    // import { userData } from "$lib/firebase";

  </script>
  
  <svelte:head>
    <title>Kung.foo - a place for links</title>
    <meta name="description" content="Demo project for the Full SvelteKit Course by Fireship" />
  </svelte:head>
  
  <main class="flex w-full min-h-screen">
  
    <div class="hero bg-base-200">
      <div class="hero-content text-center">
        <div class="w-full">
          <h1 class="text-7xl font-bold">Bio-Shower </h1>
          <p class="py-6 text-2xl">One simple link to share your entire developer portfolio</p>
          <!-- {#if $userData?.username}
            <a href="/{$userData.username}/edit" class="btn btn-primary">Edit Profile</a>
          {:else} -->
            <a href="/login" class="btn btn-primary">Get Started</a>
            <!-- <a href="/fireship" class="btn btn-secondary">Example Profile</a>
          {/if} -->
        </div>
      </div>
    </div>
    
  </main>
  
  