import { Link, routes } from '@redwoodjs/router'

type CommonLayoutProps = {
  children?: React.ReactNode
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <>
      <header>
        <h1>{process.env.SITE_NAME}</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.countries()}>Country</Link>
            </li>
            <li>
              <Link to={routes.leagues()}>League</Link>
            </li>
            <li>
              <Link to={routes.clubTeams()}>ClubTeam</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default CommonLayout
