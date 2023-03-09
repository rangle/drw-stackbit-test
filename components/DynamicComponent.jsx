import { MainHero } from './MainHero'
import { Quote } from './Quote'
import { SlashSailHero } from './SlashSailHero'
import { CurvedImage } from './CurvedImage'

const componentsMap = {
  MainHero: MainHero,
  Quote: Quote,
  SlashSailHero: SlashSailHero,
  CurvedImage: CurvedImage
}

export const DynamicComponent = (props) => {
  if (!props.type) {
    const propsOutput = JSON.stringify(props, null, 2)
    throw new Error(`Object does not have a 'type' property: ${propsOutput}`)
  }

  const Component = componentsMap[props.type]
  if (!Component) {
    throw new Error(`No component is registered for type:'${props.type}`)
  }
  return <Component {...props} />
}
