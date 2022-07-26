import { Link, routes } from '@redwoodjs/router'

type CommonLayoutProps = {
  children?: React.ReactNode
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <>
      <header>
        <div className="container mx-auto">
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
              <li>
                <Link to={routes.contact()}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto">{children}</main>
    </>
  )
}

export default CommonLayout
