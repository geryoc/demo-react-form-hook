import React from 'react'

export const FormError = ({ error }) => {
  return (<>
    {error && (<div className='ui pointing red basic label'>{error.message}</div>)}
  </>
  )
}
