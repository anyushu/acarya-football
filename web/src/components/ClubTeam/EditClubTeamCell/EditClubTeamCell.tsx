import type { EditClubTeamById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ClubTeamForm from 'src/components/ClubTeam/ClubTeamForm'

export const QUERY = gql`
  query EditClubTeamById($id: Int!) {
    clubTeam: clubTeam(id: $id) {
      id
      name_en
      name_ja
      date_established
    }
  }
`
const UPDATE_CLUB_TEAM_MUTATION = gql`
  mutation UpdateClubTeamMutation($id: Int!, $input: UpdateClubTeamInput!) {
    updateClubTeam(id: $id, input: $input) {
      id
      name_en
      name_ja
      date_established
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ clubTeam }: CellSuccessProps<EditClubTeamById>) => {
  const [updateClubTeam, { loading, error }] = useMutation(
    UPDATE_CLUB_TEAM_MUTATION,
    {
      onCompleted: () => {
        toast.success('ClubTeam updated')
        navigate(routes.clubTeams())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateClubTeam({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ClubTeam {clubTeam.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ClubTeamForm
          clubTeam={clubTeam}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
