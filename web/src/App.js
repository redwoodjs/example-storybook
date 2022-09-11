// /** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui'
import { theme } from './theme'
import { AuthProvider } from '@redwoodjs/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

/** @jsx jsx */
import { jsx } from 'theme-ui'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <ThemeProvider theme={theme}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <AuthProvider type="dbAuth">
          <RedwoodApolloProvider>
            <div
              sx={{
                fontWeight: 'bold',
                fontSize: 4, // picks up value from `theme.fontSizes[4]`
                color: 'primary', // picks up value from `theme.colors.primary`
              }}
            >
              Hello Theme UI
            </div>
            <Routes />
          </RedwoodApolloProvider>
        </AuthProvider>
      </RedwoodProvider>
    </ThemeProvider>
  </FatalErrorBoundary>
)

export default App
