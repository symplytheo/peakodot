<template>
  <main class="min-h-screen flex justify-center items-center">
    <section class="max-w-lg w-full p-4">
      <div class="flex justify-center items-center gap-1 mb-2">
        <img src="/logo.png" alt="Logo" class="w-12 h-12" />
        <h1 class="uppercase font-black text-2xl">Peakodot</h1>
      </div>
      <div class="shadow-lg rounded p-4 px-1 md:px-4">
        <slot />
      </div>
    </section>
  </main>
</template>
