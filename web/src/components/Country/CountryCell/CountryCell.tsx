import type { FindCountryById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Country from 'src/components/Country/Country'

export const QUERY = gql`
  query FindCountryById($id: Int!) {
    country: country(id: $id) {
      id
      name_en
      name_ja
      iso_code
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Country not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ country }: CellSuccessProps<FindCountryById>) => {
  return <Country country={country} />
}
