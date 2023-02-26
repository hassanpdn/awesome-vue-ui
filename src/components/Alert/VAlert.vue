<template>
      <div class="overlay h-screen w-full blur-sm z-10 relative">
      </div>
      <div class="alert absolute" :class="[alertClass, sizeClass, {'text-center': center}]" role="alert">
            <strong class="font-bold">{{ title }}</strong>
            <span class="block sm:inline">{{ message }}</span>
            <span v-if="close_able" class="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg class="fill-current h-6 w-6" role="button" @click="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                  </svg>
            </span>
      </div>
</template>

<script>
            export default {
                  name: 'Alert',
                  emits: ['input'],
                  props: {
                        title: {
                              type: String,
                              default: 'Holy smokes!'
                        },
                        message: {
                              type: String,
                              default: 'Something seriously bad happened.'
                        },
                        variant: {
                              type: String,
                              default: 'danger'
                        },
                        close_able: {
                              type: Boolean,
                              default: true
                        },
                        size: {
                              type: String,
                              default: 'md'
                        },
                        rounded: {
                              type: Boolean,
                              default: false
                        },
                        center: {
                              type: Boolean,
                              default: false
                        },
                        value: {
                              type: Boolean,
                              default: false
                        }
                  },
                  computed: {
                        variantHandler(){
                              switch (this.variant) {
                                    case 'success':
                                          return 'green'
                                    case 'danger':
                                          return 'red'
                                    case 'warning':
                                          return 'orange'
                                    case 'info':
                                          return 'blue'
                              }
                        },
                        alertClass() {
                              return [
                                    'bg-' + this.variantHandler + '-100',
                                    'border',
                                    'border-' + this.variantHandler + '-400',
                                    'text-' + this.variantHandler + '-700',
                                    {'rounded-lg rounded-t-none': !this.rounded},
                              ];
                        },
                        sizeClass() {
                              return 'w-3/4 md:w-2/5 mx-auto -mt-1 ' + 'alert-' + this.size;
                        },
                  },
                  methods: {
                        close() {
                              this.$emit('input', false);
                        }
                  },
                  mounted() {
                        document.querySelector('body').style.overflow = 'hidden';
                  },
                  beforeDestroy() {
                        document.querySelector('body').style.overflow = 'visible';
                  },
            };
</script>
    