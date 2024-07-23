<script>
    export let label = '';
    export let value = '';
</script>

<label class="label mb-2 text-sm font-medium">{label}</label>
<input
    type="text"
    placeholder="Type here"
    class="input input-bordered w-full mb-4"
    bind:value={value} />