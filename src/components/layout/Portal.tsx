import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface IPortalProps {
  children: React.ReactNode
}

const Portal: React.FC<IPortalProps> = ({ children }) => {
  const [container] =
    useState(() => document.createElement('div'))

  useEffect(() => {
    document.body.append(container)

    return () => {
      document.body.removeChild(container)
    }
  }, [container])

  return createPortal(children, container)
}

export default Portal