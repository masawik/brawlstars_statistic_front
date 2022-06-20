import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { EventModes } from '../../../../../typings/eventModes'
import EventCardComponent from './EventCard'

export default {
  title: 'EventCard',
  component: EventCardComponent,
  argTypes: {
    title: {
      name: 'title',
      description: 'Game mode name',
    },
    description: {
      name: 'description',
      description: 'Map name',
    },
    gameMode: {
      name: 'gameMode',
      description: 'Game mode id',
    },
    backgroundImagePath: {
      name: 'backgroundImagePath',
      description: 'url to map poster',
    },
  },
} as ComponentMeta<typeof EventCardComponent>

const Template: ComponentStory<typeof EventCardComponent> = (args) =>
  <EventCardComponent {...args} />

export const EventCard = Template.bind({})
EventCard.args = {
  title: 'GEM GRUB',
  description: 'Map name',
  gameMode: EventModes.GEM_GRAB,
}