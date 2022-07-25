import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CountryCreateArgs>({
  country: {
    one: { data: { name_en: 'String', name_ja: 'String', iso_code: 'String' } },
    two: { data: { name_en: 'String', name_ja: 'String', iso_code: 'String' } },
  },
})

export type StandardScenario = typeof standard
