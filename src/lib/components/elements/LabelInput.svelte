<script>
    export let label = '';
    export let value = '';
</script>

<div class="w-11/12">
<label class="label mb-2 text-sm font-medium" for={label}>{label}</label>
<input
    name={label}
    type="text"
    placeholder="Type here"
    class="input input-bordered w-full mb-4"
    bind:value={value} />
</div>