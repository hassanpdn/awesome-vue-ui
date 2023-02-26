import { mount } from '@vue/test-utils'
import { describe, it, expect } from "vitest";
import Alert from '@/components/Alert/VAlert.vue'

describe('Alert.vue', () => {
      it('renders the correct message and color variant', async () => {
            const message = 'Your submission was successful!'
            const variant = 'success'
            const wrapper = mount(Alert, {
                  propsData: { message, variant }
            })
            expect(wrapper.props().variant).toBe(variant)
            console.log(wrapper.find('.alert').classes())
            expect(wrapper.find('.alert').classes()).toContain(`bg-${variant}-100`)
            expect(wrapper.text()).toContain(message)
      })

      it('can be closed by the user', async () => {
            const wrapper = mount(Alert, {
                  propsData: { close_able: true }
            })
            const closeButton = wrapper.find('.fill-current')
            await closeButton.trigger('click')
            expect(wrapper.emitted().input).toBeTruthy()
      })
})
