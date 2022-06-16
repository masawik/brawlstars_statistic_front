import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button as ButtonComponent } from '../Button'

export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    color: {
      name: 'color',
      description: 'Color type',
      defaultValue: { summary: 'primary' },
      options: ['primary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
    },
    children: {
      name: 'text',
    },
  },
} as ComponentMeta<typeof ButtonComponent>

const Template: ComponentStory<typeof ButtonComponent> = (args) =>
  <ButtonComponent {...args}>{args.children}</ButtonComponent>

export const Default = Template.bind({})

Default.args = {
  children: 'i am button',
  color: 'primary',
}

export const asLink = Template.bind({})
asLink.args = {
  children: 'i am link but looks like button',
  color: 'primary',
  as: 'a',
  href: '#',
}

