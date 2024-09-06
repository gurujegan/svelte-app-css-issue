<script>
	/** @type {import('./$types').PageData} */
	export let data;

</script>

<div class="col-span-12 lg:col-span-6">
   <div class="bg-white dark:bg-box-dark m-0 p-0 text-body dark:text-subtitle-dark text-[15px] rounded-10">
      <div class="py-[18px] px-[25px] text-dark dark:text-title-dark font-medium text-[17px] border-b border-regular dark:border-box-dark-up">
         <h4 class="mb-0 text-lg font-medium capitalize text-dark dark:text-title-dark">select size</h4>
      </div>
      <div class="px-[25px] py-[16px] flex items-center">
         <div class="grid w-full grid-cols-1">



            <ul class="flex flex-row flex-wrap pl-0 mb-4 list-none border-b-0" id="tabs-tab3" role="tablist" data-te-nav-ref>
               <li role="presentation">
                  <a href="#tabs-home3" class="my-2 block border-1 rounded-l border-normal px-[17px] py-[11.5px] text-[14px] font-semibold capitalize leading-tight text-light hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400" id="tabs-home-tab3" data-te-toggle="pill" data-te-target="#tabs-home3" data-te-nav-active role="tab" aria-controls="tabs-home3" aria-selected="true">Large</a>
               </li>
               <li role="presentation">
                  <a href="#tabs-profile3" class="my-2 block border-1  border-normal px-[17px] py-[11.5px] text-[14px] font-semibold capitalize leading-tight text-light hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400" id="tabs-profile-tab3" data-te-toggle="pill" data-te-target="#tabs-profile3" role="tab" aria-controls="tabs-profile3" aria-selected="false">Default</a>
               </li>
               <li role="presentation">
                  <a href="#tabs-messages3" class="my-2 block border-1 rounded-r border-normal px-[17px] py-[11.5px] text-[14px] font-semibold capitalize leading-tight text-light hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400" id="tabs-messages-tab3" data-te-toggle="pill" data-te-target="#tabs-messages3" role="tab" aria-controls="tabs-messages3" aria-selected="false">Small</a>
               </li>
            </ul>

            <!--Tabs content-->
            <div>
               <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block" id="tabs-home3" role="tabpanel" data-te-tab-active aria-labelledby="tabs-home-tab3">
                  <div class="flex flex-col gap-y-5">
                     <div>


                        <div>
                           <select data-te-select-init data-te-select-size="lg">
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                              <option value="4">Option 4</option>
                              <option value="5">Option 5</option>
                              <option value="6">Option 6</option>
                           </select>
                        </div>


                     </div>
                     <div>


                        <div>
                           <select data-te-select-init data-te-select-size="lg">
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                              <option value="4">Option 4</option>
                              <option value="5">Option 5</option>
                              <option value="6">Option 6</option>
                           </select>
                        </div>


                     </div>
                     <div>


                        <div>
                           <select data-te-select-init data-te-select-size="lg">
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                              <option value="4">Option 4</option>
                              <option value="5">Option 5</option>
                              <option value="6">Option 6</option>
                           </select>
                        </div>


                     </div>
                  </div>
               </div>
               <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                  <div class="flex flex-col gap-y-5">
                     <div>


                        <div>
                           <select data-te-select-init>
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                              <option value="4">Option 4</option>
                              <option value="5">Option 5</option>
                              <option value="6">Option 6</option>
                           </select>
                        </div>


                     </div>
                     <div>


                        <div>
                           <select data-te-select-init>
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                              <option value="4">Option 4</option>
                              <option value="5">Option 5</option>
                              <option value="6">Option 6</option>
                           </select>
                        </div>


                     </div>
                     <div>


                        <div>
                           <select data-te-select-init>
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                              <option value="4">Option 4</option>
                              <option value="5">Option 5</option>
                              <option value="6">Option 6</option>
                           </select>
                        </div>


                     </div>
                  </div>
               </div>
               <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block" id="tabs-messages3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                  <div class="flex flex-col gap-y-5">
                     <div>


                        <div>
                           <select data-te-select-init data-te-select-size="sm">
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                              <option value="4">Option 4</option>
                              <option value="5">Option 5</option>
                              <option value="6">Option 6</option>
                           </select>
                        </div>


                     </div>
                     <div>


                        <div>
                           <select data-te-select-init data-te-select-size="sm">
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                              <option value="4">Option 4</option>
                              <option value="5">Option 5</option>
                              <option value="6">Option 6</option>
                           </select>
                        </div>


                     </div>
                     <div>


                        <div>
                           <select data-te-select-init data-te-select-size="sm">
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                              <option value="4">Option 4</option>
                              <option value="5">Option 5</option>
                              <option value="6">Option 6</option>
                           </select>
                        </div>


                     </div>
                  </div>
               </div>
            </div>



         </div>
      </div>
   </div>
</div>