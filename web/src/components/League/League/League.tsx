import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_LEAGUE_MUTATION = gql`
  mutation DeleteLeagueMutation($id: Int!) {
    deleteLeague(id: $id) {
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

const League = ({ league }) => {
  const [deleteLeague] = useMutation(DELETE_LEAGUE_MUTATION, {
    onCompleted: () => {
      toast.success('League deleted')
      navigate(routes.leagues())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete league ' + id + '?')) {
      deleteLeague({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            League {league.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{league.id}</td>
            </tr>
            <tr>
              <th>Level</th>
              <td>{league.level}</td>
            </tr>
            <tr>
              <th>Name en</th>
              <td>{league.name_en}</td>
            </tr>
            <tr>
              <th>Name ja</th>
              <td>{league.name_ja}</td>
            </tr>
            <tr>
              <th>Date established</th>
              <td>{timeTag(league.date_established)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editLeague({ id: league.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(league.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default League
