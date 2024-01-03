<template>
	<section class="px-6 pb-6  bg-pink-100  border-t-2 border-white">
		<form novalidate="" action="" class="container  mx-auto space-y-12">
			<div class="grid grid-cols-1 gap-6 p-6 ">
				<div class="space-y-2 col-span-full lg:col-span-1">
					<h3 class="font-medium">Leave a Reply</h3>
					<p class="text-xs">Your email address will not be published. Required fields are marked *</p>
				</div>
				<div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
					<div class="col-span-full">
						<label for="bio" class="text-sm mb-4">Bio</label>
						<textarea id="bio" placeholder="Bio"
							class="w-full p-4 h-16 rounded-md focus:ring focus:ri focus:ri  "></textarea>
					</div>
					<div class="col-span-full sm:col-span-3">
						<label for="firstname" class="text-sm mb-4">First name</label>
						<input id="firstname" type="text" placeholder="First name"
							class="w-full h-12 p-4 rounded-md focus:ring focus:ri focus:ri  ">
					</div>
					<div class="col-span-full sm:col-span-3">
						<label for="lastname" class="text-sm mb-4">Last name</label>
						<input id="lastname" type="text" placeholder="Last name"
							class="w-full h-12 p-4 rounded-md focus:ring focus:ri focus:ri  ">
					</div>
				</div>
				<div class="col-span-full sm:col-span-3">
					<label for="address" class="text-sm mb-4">Address</label>
					<input id="address" type="text" placeholder="Address"
						class="w-full h-12 p-4 rounded-md focus:ring focus:ri focus:ri  ">
				</div>
			</div>
			<div class="">
				<span class="comment-checkBox mr-1 md:mr-4 lg:mr-4  "><i class="bi bi-check"></i></span>
				<span>Save my name, email, and website in this browser for the next time I comment.</span>
			</div>
			<button href="#" class="bg-btn  text-black">Post comment</button>

		</form>
	</section>
</template>