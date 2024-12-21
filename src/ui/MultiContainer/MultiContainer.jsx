import classNames from 'classnames'
import classes from './MultiContainer.module.scss'
import { forwardRef } from 'react'

export const MultiContainer = forwardRef( ( props, ref ) => {
  const { children, className } = props
  return (
    <div ref={ref} className={classNames( classes.container, className )}>
      {children}
    </div>
  )
} )

MultiContainer.displayName = 'MultiContainer'