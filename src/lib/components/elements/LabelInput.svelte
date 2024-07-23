<script>
    export let value = '';
</script>

<label class="label mb-2 text-2xl font-medium">Pan Id</label>
<input
    type="text"
    placeholder="Type here"
    class="input input-bordered w-full mb-4"
    bind:value={value} />