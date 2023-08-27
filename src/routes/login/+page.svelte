<script lang="ts">
    import type { PageData } from './$types';
    import { auth} from '$lib/firebase';
    import {GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
    async function signInWithGoogle(){
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);
        console.log(user);
    }
</script>
<button class = "btn btn-primary" on:click={signInWithGoogle}>Sign in with Google   </button>
