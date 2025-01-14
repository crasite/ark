import type { ItemProps } from '@zag-js/carousel'
import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLArkProps } from '../factory'
import type { Assign } from '../types'
import { useCarouselContext } from './carousel-context'

export interface CarouselItemProps extends Assign<HTMLArkProps<'div'>, ItemProps> {}

export const CarouselItem = forwardRef<HTMLDivElement, CarouselItemProps>((props, ref) => {
  const { index, ...divProps } = props
  const api = useCarouselContext()
  const mergedProps = mergeProps(api.getItemProps({ index }), divProps)

  return <ark.div {...mergedProps} ref={ref} />
})

CarouselItem.displayName = 'CarouselItem'
