import Card from '@/components/Card.vue'
import { shallowMount } from '@vue/test-utils'

it('expect to render Card component', () => {
    const title = "Emilia Clarke as Daenerys Targaryen"
    const srcSet = {
        medium: "image-medium-src",
        original: 'image-original-src'
    }
    const wrapper = shallowMount(Card, {
        propsData: { title, srcSet }
    })
    expect(wrapper).toMatchSnapshot()
})
