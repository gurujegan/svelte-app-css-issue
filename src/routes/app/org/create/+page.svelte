<script>
	import CenterElements from '$lib/components/container/CenterElements.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>



<CenterElements>
    <div class="form-control w-1/2 border-solid border-2 border-sky-500 rounded">
        <label class="label">
          <span class="label-text">Create Org</span>
        </label>
        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md" />
        <button class="btn btn-accent max-w-md">Accent</button>
      </div>
</CenterElements>