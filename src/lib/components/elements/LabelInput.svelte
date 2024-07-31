<script>
    export let formElement;
    export let value;
</script>

<div class="w-full">
<label class="label mb-2 text-sm font-medium" for={formElement.id}>{formElement.value}</label>
<input
    name={formElement.id}
    type="text"
    placeholder="Type here"
    class="input input-bordered w-full mb-4"
    bind:value={value} />
</div>