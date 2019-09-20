<template>
    <nav class="flex items-center justify-between flex-wrap p-6 absolute z-50 w-full object-top">
        <div class="flex items-center w-1/4 flex-shrink-0 text-white mr-6">
            <img src="~/assets/img/logo.png" alt="logo">
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="block flex-grow w-1/4 lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <a href="#responsive-header" class="block mt-4 lg:inline-block font-black text-lg lg:mt-0 hover:text-white mr-1 bg-blue-600 p-3 text-white">
                    HOME
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block font-black text-lg lg:mt-0 hover:text-white mr-1 hover:bg-blue-600 p-3 text-white">
                    SPEAKERS
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block font-black text-lg lg:mt-0 hover:text-white mr-1 hover:bg-blue-600 p-3 text-white">
                    TICKETS
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block font-black text-lg lg:mt-0 hover:text-white mr-1 hover:bg-blue-600 p-3 text-white">
                    BLOG
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block font-black text-lg lg:mt-0 hover:text-white mr-1 hover:bg-blue-600 p-3 text-white">
                    CONTACT 
                </a>
            </div>
            
        </div>

        <div class="block flex-grow w-1/4 lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-lg mr-5 text-white">
                    <i class="fab fa-pinterest"></i>    
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-lg mr-5 text-white">
                    <i class="fab fa-facebook-f"></i>    
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-lg mr-5 text-white">
                    <i class="fab fa-twitter"></i>    
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-lg mr-5 text-white">
                    <i class="fab fa-dribbble"></i>  
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-lg mr-5 text-white">
                    <i class="fab fa-behance"></i>  
                </a>
                
            </div>
            
        </div>
    </nav>
</template>

<style>
nav{
    background: linear-gradient(to right, #ff1a6b, #2a34d0) 
}
</style>