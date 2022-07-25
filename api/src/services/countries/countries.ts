import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const countries: QueryResolvers['countries'] = () => {
  return db.country.findMany()
}

export const country: QueryResolvers['country'] = ({ id }) => {
  return db.country.findUnique({
    where: { id },
  })
}

export const createCountry: MutationResolvers['createCountry'] = ({
  input,
}) => {
  return db.country.create({
    data: input,
  })
}

export const updateCountry: MutationResolvers['updateCountry'] = ({
  id,
  input,
}) => {
  return db.country.update({
    data: input,
    where: { id },
  })
}

export const deleteCountry: MutationResolvers['deleteCountry'] = ({ id }) => {
  return db.country.delete({
    where: { id },
  })
}
