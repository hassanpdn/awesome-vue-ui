<template>
      <div class="alert" :class="[variant_handler , size_handler  ,rounded ? 'alert-rounded' : '',center ? 'alert-center' : '']" v-if="value" ref="alert">
            <div class="close-alert" v-if="close_able" @click.prevent="$emit('input', !value)">
                  <svg viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg" class="alert-close-icon">
                        <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/>
                  </svg>
            </div>
            {{message}}
      </div>
</template>

<script>
      export default {
            name: 'alert',
            props: {
                  variant: {
                        type: String,
                        default: 'danger'
                  },
                  message: {
                        type: String,
                        default: ''
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
                  variant_handler() {
                        return 'alert-' + this.variant
                  },
                  size_handler() {
                        return 'alert-' + this.size
                  }
            }
      }
</script>
