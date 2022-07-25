import type { FindCountries } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Countries from 'src/components/Country/Countries'

export const QUERY = gql`
  query FindCountries {
    countries {
      id
      name_en
      name_ja
      iso_code
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No countries yet. '}
      <Link
        to={routes.newCountry()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ countries }: CellSuccessProps<FindCountries>) => {
  return <Countries countries={countries} />
}
