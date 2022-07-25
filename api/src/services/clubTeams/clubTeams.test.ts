import {
  clubTeams,
  clubTeam,
  createClubTeam,
  updateClubTeam,
  deleteClubTeam,
} from './clubTeams'
import type { StandardScenario } from './clubTeams.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('clubTeams', () => {
  scenario('returns all clubTeams', async (scenario: StandardScenario) => {
    const result = await clubTeams()

    expect(result.length).toEqual(Object.keys(scenario.clubTeam).length)
  })

  scenario('returns a single clubTeam', async (scenario: StandardScenario) => {
    const result = await clubTeam({ id: scenario.clubTeam.one.id })

    expect(result).toEqual(scenario.clubTeam.one)
  })

  scenario('creates a clubTeam', async () => {
    const result = await createClubTeam({
      input: {
        name_en: 'String',
        name_ja: 'String',
        date_established: '2022-07-25T13:59:18Z',
      },
    })

    expect(result.name_en).toEqual('String')
    expect(result.name_ja).toEqual('String')
    expect(result.date_established).toEqual('2022-07-25T13:59:18Z')
  })

  scenario('updates a clubTeam', async (scenario: StandardScenario) => {
    const original = await clubTeam({ id: scenario.clubTeam.one.id })
    const result = await updateClubTeam({
      id: original.id,
      input: { name_en: 'String2' },
    })

    expect(result.name_en).toEqual('String2')
  })

  scenario('deletes a clubTeam', async (scenario: StandardScenario) => {
    const original = await deleteClubTeam({ id: scenario.clubTeam.one.id })
    const result = await clubTeam({ id: original.id })

    expect(result).toEqual(null)
  })
})
