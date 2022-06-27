import { header } from './header'
import { languagePicker } from './languagePicker'
import { currentEvents } from './currentEvents'
import { notFound } from './notFound'
import { event } from './event'
import { brawlerTable } from './brawlerTable'
import { TLocalization } from '../TLocalization'
import { errorPopup } from './errorPopup'

const ru: TLocalization = {
  header,
  languagePicker,
  currentEvents,
  notFound,
  event,
  brawlerTable,
  errorPopup,
}

export default ru