import React from 'react'
import { Link } from '../components/base/Link'

export const Download = () => (
  <div>
    <div>
      <Link href='/styles.zip' icon='file-download'>
        Styles
      </Link>
    </div>

    <div>
      <Link href='/scripts.zip' icon='file-download'>
        Scripts
      </Link>
    </div>
  </div>
)
