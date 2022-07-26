import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_CLUB_TEAM_MUTATION = gql`
  mutation DeleteClubTeamMutation($id: Int!) {
    deleteClubTeam(id: $id) {
      id
    }
  }
`

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const ClubTeam = ({ clubTeam }) => {
  const [deleteClubTeam] = useMutation(DELETE_CLUB_TEAM_MUTATION, {
    onCompleted: () => {
      toast.success('ClubTeam deleted')
      navigate(routes.clubTeams())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete clubTeam ' + id + '?')) {
      deleteClubTeam({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ClubTeam {clubTeam.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{clubTeam.id}</td>
            </tr>
            <tr>
              <th>Name en</th>
              <td>{clubTeam.name_en}</td>
            </tr>
            <tr>
              <th>Name ja</th>
              <td>{clubTeam.name_ja}</td>
            </tr>
            <tr>
              <th>Date established</th>
              <td>{timeTag(clubTeam.date_established)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editClubTeam({ id: clubTeam.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(clubTeam.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ClubTeam
