import React from 'react'
import { useIntl } from 'react-intl'
import Page from 'material-ui-shell/lib/containers/Page'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar'

const About = () => {
  const intl = useIntl()
  return (
    <Page
      pageTitle={intl.formatMessage({ id: 'about', defaultMessage: 'About' })}
    >
      <Scrollbar>
        <div style={{ padding: 12 }}>
          
        </div>
      </Scrollbar>
    </Page>
  )
}
export default About
