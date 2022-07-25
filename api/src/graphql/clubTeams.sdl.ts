export const schema = gql`
  type ClubTeam {
    id: Int!
    name_en: String!
    name_ja: String!
    date_established: DateTime!
  }

  type Query {
    clubTeams: [ClubTeam!]! @requireAuth
    clubTeam(id: Int!): ClubTeam @requireAuth
  }

  input CreateClubTeamInput {
    name_en: String!
    name_ja: String!
    date_established: DateTime!
  }

  input UpdateClubTeamInput {
    name_en: String
    name_ja: String
    date_established: DateTime
  }

  type Mutation {
    createClubTeam(input: CreateClubTeamInput!): ClubTeam! @requireAuth
    updateClubTeam(id: Int!, input: UpdateClubTeamInput!): ClubTeam!
      @requireAuth
    deleteClubTeam(id: Int!): ClubTeam! @requireAuth
  }
`
