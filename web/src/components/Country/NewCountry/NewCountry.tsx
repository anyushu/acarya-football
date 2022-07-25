import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CountryForm from 'src/components/Country/CountryForm'

const CREATE_COUNTRY_MUTATION = gql`
  mutation CreateCountryMutation($input: CreateCountryInput!) {
    createCountry(input: $input) {
      id
    }
  }
`

const NewCountry = () => {
  const [createCountry, { loading, error }] = useMutation(
    CREATE_COUNTRY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Country created')
        navigate(routes.countries())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createCountry({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Country</h2>
      </header>
      <div className="rw-segment-main">
        <CountryForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCountry
