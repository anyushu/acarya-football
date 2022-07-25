import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ClubTeam/ClubTeamsCell'

const DELETE_CLUB_TEAM_MUTATION = gql`
  mutation DeleteClubTeamMutation($id: Int!) {
    deleteClubTeam(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const ClubTeamsList = ({ clubTeams }) => {
  const [deleteClubTeam] = useMutation(DELETE_CLUB_TEAM_MUTATION, {
    onCompleted: () => {
      toast.success('ClubTeam deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete clubTeam ' + id + '?')) {
      deleteClubTeam({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name en</th>
            <th>Name ja</th>
            <th>Date established</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {clubTeams.map((clubTeam) => (
            <tr key={clubTeam.id}>
              <td>{truncate(clubTeam.id)}</td>
              <td>{truncate(clubTeam.name_en)}</td>
              <td>{truncate(clubTeam.name_ja)}</td>
              <td>{timeTag(clubTeam.date_established)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.clubTeam({ id: clubTeam.id })}
                    title={'Show clubTeam ' + clubTeam.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editClubTeam({ id: clubTeam.id })}
                    title={'Edit clubTeam ' + clubTeam.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete clubTeam ' + clubTeam.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(clubTeam.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ClubTeamsList
