import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLArkProps } from '../factory'
import { useTooltipContext } from './tooltip-context'

export interface TooltipTriggerProps extends HTMLArkProps<'button'> {}

export const TooltipTrigger = forwardRef<HTMLButtonElement, TooltipTriggerProps>((props, ref) => {
  const api = useTooltipContext()
  const mergedProps = mergeProps(api.triggerProps, props)

  return <ark.button {...mergedProps} ref={ref} />
})

TooltipTrigger.displayName = 'TooltipTrigger'
