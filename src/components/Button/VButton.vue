<template>
      <button class="
            p-3 
            rounded-sm 
            bg-green-600 
            hover:bg-green-50 
            hover:shadow-md 
            hover:shadow-gray-400 
            active:shadow-sm 
            active:bg-green-800 
            transition-colors 
            transition-shadows 
            duration-500 
            ease-linear"
            :class="{'w-full': expanded}"
      >
            <slot/>
      </button>
</template>

<script>
      export default {
            name: 'v-button',
            props: {
                  expanded: {
                        type: Boolean,
                        default: false
                  }
            },
            methods: {
                  // handleClick(){
                  //       this.$emit('click')
                  // }
            }
      }
</script>

<style>
</style>