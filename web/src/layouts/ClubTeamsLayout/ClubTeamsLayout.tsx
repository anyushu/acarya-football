import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type ClubTeamLayoutProps = {
  children: React.ReactNode
}

const ClubTeamsLayout = ({ children }: ClubTeamLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.clubTeams()}
            className="rw-link"
          >
            ClubTeams
          </Link>
        </h1>
        <Link
          to={routes.newClubTeam()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New ClubTeam
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ClubTeamsLayout
