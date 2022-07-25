export const schema = gql`
  type League {
    id: Int!
    level: Int!
    name_en: String!
    name_ja: String!
    date_established: DateTime!
  }

  type Query {
    leagues: [League!]! @requireAuth
    league(id: Int!): League @requireAuth
  }

  input CreateLeagueInput {
    level: Int!
    name_en: String!
    name_ja: String!
    date_established: DateTime!
  }

  input UpdateLeagueInput {
    level: Int
    name_en: String
    name_ja: String
    date_established: DateTime
  }

  type Mutation {
    createLeague(input: CreateLeagueInput!): League! @requireAuth
    updateLeague(id: Int!, input: UpdateLeagueInput!): League! @requireAuth
    deleteLeague(id: Int!): League! @requireAuth
  }
`
