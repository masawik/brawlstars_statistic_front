import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react'
import EventCardComponent from './EventCard'
import gameModeIcon from '../../../assets/img/mock/game_mode_gem_grab.png'
import mapImage from '../../../assets/img/mock/map_banner_1.png'

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
    mapImageUrl: {
      name: 'backgroundImagePath',
      description: 'url to map poster',
    },
  },
} as ComponentMeta<typeof EventCardComponent>

const Template: ComponentStory<typeof EventCardComponent> = (args) =>
  <EventCardComponent {...args} />

export const EventCard = Template.bind({})
EventCard.args = {
  eventData: {
    id: 1,
    gameMode: 'GEM GRAB',
    gameModeColor: '#fff',
    mapName: 'map name',
    gameModeIconUrl: gameModeIcon,
    mapBannerImageUrl: mapImage,
    endTime: new Date().getTime()
  },
}