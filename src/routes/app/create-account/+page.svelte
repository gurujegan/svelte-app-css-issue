<script>
    import DrawerContentContainer from '$lib/components/container/DrawerContentContainer.svelte';
    import LabelInput from '$lib/components/elements/LabelInput.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    
    let formData = {};
</script>

<DrawerContentContainer>
    <form class="form-control md:w-1/2 w-full rounded">
        <LabelInput name='Pan Id' value='Hi'></LabelInput>
        <LabelInput name='Customer Name' value='Hi'></LabelInput>
        <LabelInput name='Bank Account No' value='Hi'></LabelInput>
        <LabelInput name='Bank Name' value='Hi'></LabelInput>
        <LabelInput name='E-Mail' value='Hi'></LabelInput>
        <LabelInput name='Mobile No' value='{formData.mobNo}'></LabelInput>
		<button class="btn btn-info" on:click={createOrg}>Create Organization</button>
	</form>
</DrawerContentContainer>