<template>
  <div class="mb-12 space-y-3 lg:w-[25rem]">
    <div class="my-2 space-x-[2px] rating">
        <font-awesome-icon :icon="['fa', 'star']" style="color: #f0ad4e;" />
        <font-awesome-icon :icon="['fa', 'star']" style="color: #f0ad4e;" />
        <font-awesome-icon :icon="['fa', 'star']" style="color: #f0ad4e;" />
        <font-awesome-icon :icon="['fa', 'star']" style="color: #f0ad4e;" />
        <font-awesome-icon :icon="['fa', 'star']" style="color: #f0ad4e;" />
    </div>
    <p class="font-sans lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere tincidunt purus, eu consectetur eros sodales nec. Maecenas ac erat pretium, ultricies nibh quis, mattis massa.</p>
    <h6 class="text-[#5d5b5b] lg:text-sm uppercase text-[.7rem] after:content-[''] after:h-[1px] after:w-12 after:bg-[#d4a6b6] after:absolute relative overflow-visible after:-bottom-3 after:z-50 after:left-0">James Oliver</h6>
  </div>
</template>

<script>
export default {
  name: 'Review',
  data() {
    return {
      
    };
  },
  methods: {
  }
};
</script>
