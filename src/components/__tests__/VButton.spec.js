import { mount } from '@vue/test-utils'
import Button from '../Button/VButton.vue';
import { describe, it, expect } from "vitest";

describe('Button', () => {
      const wrapper = mount(Button)
      it('renders a vue instance', () => {
            expect(wrapper.html()).toMatchSnapshot()
      })
      
      it('renders a button', () => {
            expect(wrapper.find('button').exists()).toBe(true)
      })

      it('should call click handler', async () => {
            await wrapper.find('button').trigger('click')
            expect(wrapper.emitted().click).toBeTruthy()
      })

      // it('calls a function when clicked', () => {
      //       const handleClick = jest.fn()
      //       const wrapper = mount(Button, {
      //             propsData: {
      //                   onClick: handleClick
      //             }
      //       })
      //       wrapper.find('button').trigger('click')
      //       expect(handleClick).toHaveBeenCalled()
      // })
})