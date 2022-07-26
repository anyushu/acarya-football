import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Country/CountriesCell'

const DELETE_COUNTRY_MUTATION = gql`
  mutation DeleteCountryMutation($id: Int!) {
    deleteCountry(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const CountriesList = ({ countries }) => {
  const [deleteCountry] = useMutation(DELETE_COUNTRY_MUTATION, {
    onCompleted: () => {
      toast.success('Country deleted')
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
    if (confirm('Are you sure you want to delete country ' + id + '?')) {
      deleteCountry({ variables: { id } })
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
            <th>Iso code</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.id}>
              <td>{truncate(country.id)}</td>
              <td>{truncate(country.name_en)}</td>
              <td>{truncate(country.name_ja)}</td>
              <td>{truncate(country.iso_code)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.country({ id: country.id })}
                    title={'Show country ' + country.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCountry({ id: country.id })}
                    title={'Edit country ' + country.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete country ' + country.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(country.id)}
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

export default CountriesList
