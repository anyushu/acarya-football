import type { FindClubTeamById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ClubTeam from 'src/components/ClubTeam/ClubTeam'

export const QUERY = gql`
  query FindClubTeamById($id: Int!) {
    clubTeam: clubTeam(id: $id) {
      id
      name_en
      name_ja
      date_established
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ClubTeam not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ clubTeam }: CellSuccessProps<FindClubTeamById>) => {
  return <ClubTeam clubTeam={clubTeam} />
}
