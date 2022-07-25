export const schema = gql`
  type Country {
    id: Int!
    name_en: String!
    name_ja: String!
    iso_code: String!
  }

  type Query {
    countries: [Country!]! @requireAuth
    country(id: Int!): Country @requireAuth
  }

  input CreateCountryInput {
    name_en: String!
    name_ja: String!
    iso_code: String!
  }

  input UpdateCountryInput {
    name_en: String
    name_ja: String
    iso_code: String
  }

  type Mutation {
    createCountry(input: CreateCountryInput!): Country! @requireAuth
    updateCountry(id: Int!, input: UpdateCountryInput!): Country! @requireAuth
    deleteCountry(id: Int!): Country! @requireAuth
  }
`
