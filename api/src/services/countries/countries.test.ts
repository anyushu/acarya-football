import {
  countries,
  country,
  createCountry,
  updateCountry,
  deleteCountry,
} from './countries'
import type { StandardScenario } from './countries.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('countries', () => {
  scenario('returns all countries', async (scenario: StandardScenario) => {
    const result = await countries()

    expect(result.length).toEqual(Object.keys(scenario.country).length)
  })

  scenario('returns a single country', async (scenario: StandardScenario) => {
    const result = await country({ id: scenario.country.one.id })

    expect(result).toEqual(scenario.country.one)
  })

  scenario('creates a country', async () => {
    const result = await createCountry({
      input: { name_en: 'String', name_ja: 'String', iso_code: 'String' },
    })

    expect(result.name_en).toEqual('String')
    expect(result.name_ja).toEqual('String')
    expect(result.iso_code).toEqual('String')
  })

  scenario('updates a country', async (scenario: StandardScenario) => {
    const original = await country({ id: scenario.country.one.id })
    const result = await updateCountry({
      id: original.id,
      input: { name_en: 'String2' },
    })

    expect(result.name_en).toEqual('String2')
  })

  scenario('deletes a country', async (scenario: StandardScenario) => {
    const original = await deleteCountry({ id: scenario.country.one.id })
    const result = await country({ id: original.id })

    expect(result).toEqual(null)
  })
})
