import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ClubTeamCreateArgs>({
  clubTeam: {
    one: {
      data: {
        name_en: 'String',
        name_ja: 'String',
        date_established: '2022-07-25T13:59:18Z',
      },
    },
    two: {
      data: {
        name_en: 'String',
        name_ja: 'String',
        date_established: '2022-07-25T13:59:18Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
