import type { EditCountryById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CountryForm from 'src/components/Country/CountryForm'

export const QUERY = gql`
  query EditCountryById($id: Int!) {
    country: country(id: $id) {
      id
      name_en
      name_ja
      iso_code
    }
  }
`
const UPDATE_COUNTRY_MUTATION = gql`
  mutation UpdateCountryMutation($id: Int!, $input: UpdateCountryInput!) {
    updateCountry(id: $id, input: $input) {
      id
      name_en
      name_ja
      iso_code
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ country }: CellSuccessProps<EditCountryById>) => {
  const [updateCountry, { loading, error }] = useMutation(
    UPDATE_COUNTRY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Country updated')
        navigate(routes.countries())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateCountry({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Country {country.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CountryForm
          country={country}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
