<script lang="ts">
  import { user } from "$lib/firebase";
  import type { PageData } from "./$types";
  import { auth } from "$lib/firebase";
  import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    try{
        const _ = await signInWithPopup(auth, provider); // Pop up window
    } catch (e) {
        console.error(e);
    }
  }
</script>

{#if $user}
<div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Card title!</h2>
      <p>Hello {$user.displayName}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" on:click={() => signOut(auth)}>Sign out</button>
    </div>
    </div>
  </div>  
{:else}
  <button class="btn btn-primary" on:click={signInWithGoogle}
    >Sign in with Google
  </button>
{/if}
