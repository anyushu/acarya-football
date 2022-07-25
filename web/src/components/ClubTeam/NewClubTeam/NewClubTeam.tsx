import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ClubTeamForm from 'src/components/ClubTeam/ClubTeamForm'

const CREATE_CLUB_TEAM_MUTATION = gql`
  mutation CreateClubTeamMutation($input: CreateClubTeamInput!) {
    createClubTeam(input: $input) {
      id
    }
  }
`

const NewClubTeam = () => {
  const [createClubTeam, { loading, error }] = useMutation(
    CREATE_CLUB_TEAM_MUTATION,
    {
      onCompleted: () => {
        toast.success('ClubTeam created')
        navigate(routes.clubTeams())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createClubTeam({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ClubTeam</h2>
      </header>
      <div className="rw-segment-main">
        <ClubTeamForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewClubTeam
