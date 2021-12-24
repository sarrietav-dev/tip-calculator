<template>
  <main class="grow bg-white rounded-t-3xl p-7">
    <form action="">
      <div class="flex flex-col font-bold text-gray-500 relative">
        <label for="bill" class="mb-2">Bill</label>
        <div class="absolute bottom-3 left-5 h-5">
          <img
            src="@/assets/icon-dollar.svg"
            alt="Price symbol"
            class="h-full"
          />
        </div>
        <input
          id="bill"
          type="number"
          value="0"
          class="
            border-none
            bg-gray-100
            rounded
            font-bold
            text-xl text-green-900 text-right
            focus:ring-2 focus:ring-green-500
          "
        />
      </div>
    </form>
  </main>
</template>
