<script>
	import { get } from 'svelte/store';

	export let formElements;
  
  export let store;

	const entities = store;

	const entityKeys = formElements?.map((e) => e.id);
</script>

<!-- List START-->
<div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
	<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
		<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			<tr>
				<th scope="col" class="p-4">
					<div class="flex items-center">
						<input
							id="checkbox-all"
							type="checkbox"
							class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label for="checkbox-all" class="sr-only">checkbox</label>
					</div>
				</th>

				{#each formElements as formElement}
					<th scope="col" class="px-6 py-3"> {formElement.value} </th>
				{/each}

				<th scope="col" class="px-6 py-3"> Actions</th>
			</tr>
		</thead>
		<tbody>
			{#each $entities as entity, i}
				<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<td class="w-4 p-4">
						<div class="flex items-center">
							<input
								id="checkbox-table-1"
								type="checkbox"
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label for="checkbox-table-1" class="sr-only">checkbox</label>
						</div>
					</td>

					{#each entityKeys as key}
						<td class="px-6 py-4">
							{entity[key]}
						</td>
					{/each}
					<!--                     
          <td class="px-6 py-4">
            {customer.id}
          </td>
          <td class="px-6 py-4">
            {customer.customerName}
          </td>
          <td class="px-6 py-4">
            {customer.mobNo}
          </td>
          <td class="px-6 py-4">
            {customer.email}
          </td>
          <td class="px-6 py-4">
            {customer.panId}
          </td>
          <td class="px-6 py-4">
            {customer.aadharNo}
          </td> -->
					<td class="px-6 py-4">
						<a
							href="#/"
							class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							on:click={() => addRow(customer)}
							>Save
						</a>
						<a
							href="#/"
							class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							on:click={() => deleteRow(i)}
							>Delete
						</a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
<!-- List END-->
