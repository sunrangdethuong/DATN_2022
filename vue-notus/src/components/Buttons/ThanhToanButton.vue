<template>
  <div class="mt-3">
    <button
      class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
      type="button"
      @click="$emit('getInfor', elementId)"
    >
      Thanh toán
    </button>
  </div>
</template>
<script>
export default {
  props: {
    elementId: Number,
  },
};
</script>
