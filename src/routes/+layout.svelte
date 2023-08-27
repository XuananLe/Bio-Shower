<script lang="ts">
    import type { LayoutData } from './$types';
    import "../app.css";
    export let data: LayoutData;
</script>
<div class="min-h-screen flex flex-col">
    <slot />
</div>
