import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const clubTeams: QueryResolvers['clubTeams'] = () => {
  return db.clubTeam.findMany()
}

export const clubTeam: QueryResolvers['clubTeam'] = ({ id }) => {
  return db.clubTeam.findUnique({
    where: { id },
  })
}

export const createClubTeam: MutationResolvers['createClubTeam'] = ({
  input,
}) => {
  return db.clubTeam.create({
    data: input,
  })
}

export const updateClubTeam: MutationResolvers['updateClubTeam'] = ({
  id,
  input,
}) => {
  return db.clubTeam.update({
    data: input,
    where: { id },
  })
}

export const deleteClubTeam: MutationResolvers['deleteClubTeam'] = ({ id }) => {
  return db.clubTeam.delete({
    where: { id },
  })
}
