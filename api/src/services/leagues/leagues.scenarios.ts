import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.LeagueCreateArgs>({
  league: {
    one: {
      data: {
        name_en: 'String',
        name_ja: 'String',
        date_established: '2022-07-25T13:59:07Z',
      },
    },
    two: {
      data: {
        name_en: 'String',
        name_ja: 'String',
        date_established: '2022-07-25T13:59:07Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
