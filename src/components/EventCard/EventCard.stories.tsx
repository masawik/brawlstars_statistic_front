import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory } from '@storybook/react'
import EventCard from './EventCard'
import { EventModes } from '../../typings/eventModes'

const Template: ComponentStory<typeof EventCard> =
  (args) => (<EventCard {...args} />)

export const Event = Template.bind({})

Event.args = {
  title: 'GEM GRAB',
  description: 'map name',
  gameMode: EventModes.GEM_GRAB,
}