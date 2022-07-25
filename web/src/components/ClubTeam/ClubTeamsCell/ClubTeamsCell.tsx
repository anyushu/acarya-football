import type { FindClubTeams } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ClubTeams from 'src/components/ClubTeam/ClubTeams'

export const QUERY = gql`
  query FindClubTeams {
    clubTeams {
      id
      name_en
      name_ja
      date_established
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No clubTeams yet. '}
      <Link
        to={routes.newClubTeam()}
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

export const Success = ({ clubTeams }: CellSuccessProps<FindClubTeams>) => {
  return <ClubTeams clubTeams={clubTeams} />
}
