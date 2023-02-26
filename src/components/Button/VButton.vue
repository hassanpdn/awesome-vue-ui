<template>
      <button class="
            p-3 
            rounded-sm 
            hover:bg-green-50 
            hover:shadow-md 
            hover:shadow-gray-400 
            active:shadow-sm 
            active:bg-green-800 
            transition-colors 
            transition-shadows 
            duration-500
            ease-linear"
            :class="`${expanded ? 'w-full' : ''} ${bgColor} ${textColor}`"
            @click="handleClick"
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
                  },
                  textColor: {
                        type: String,
                        default: 'bg-gray-300'
                  },
                  bgColor: {
                        type: String,
                        default: "bg-blue-500",
                  }
            },
            methods: {
                  handleClick(){
                        this.$emit('click')
                  }
            }
      }
</script>

<style>
</style>