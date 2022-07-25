import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type CountryLayoutProps = {
  children: React.ReactNode
}

const CountriesLayout = ({ children }: CountryLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.countries()} className="rw-link">
            Countries
          </Link>
        </h1>
        <Link to={routes.newCountry()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Country
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default CountriesLayout
