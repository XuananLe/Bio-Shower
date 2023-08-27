<script lang="ts">
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>
<div class = "min-h-screen flex flex-col">
    <slot/>
</div>
