import { Set, Router, Route } from '@redwoodjs/router'

import ClubTeamsLayout from 'src/layouts/ClubTeamsLayout'
import CommonLayout from 'src/layouts/CommonLayout/CommonLayout'
import CountriesLayout from 'src/layouts/CountriesLayout'
import LeaguesLayout from 'src/layouts/LeaguesLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={CommonLayout}>
        <Route path="/contact" page={ContactPage} name="contact" />
        <Set wrap={ClubTeamsLayout}>
          <Route path="/club-teams/new" page={ClubTeamNewClubTeamPage} name="newClubTeam" />
          <Route path="/club-teams/{id:Int}/edit" page={ClubTeamEditClubTeamPage} name="editClubTeam" />
          <Route path="/club-teams/{id:Int}" page={ClubTeamClubTeamPage} name="clubTeam" />
          <Route path="/club-teams" page={ClubTeamClubTeamsPage} name="clubTeams" />
        </Set>
        <Set wrap={LeaguesLayout}>
          <Route path="/leagues/new" page={LeagueNewLeaguePage} name="newLeague" />
          <Route path="/leagues/{id:Int}/edit" page={LeagueEditLeaguePage} name="editLeague" />
          <Route path="/leagues/{id:Int}" page={LeagueLeaguePage} name="league" />
          <Route path="/leagues" page={LeagueLeaguesPage} name="leagues" />
        </Set>
        <Set wrap={CountriesLayout}>
          <Route path="/countries/new" page={CountryNewCountryPage} name="newCountry" />
          <Route path="/countries/{id:Int}/edit" page={CountryEditCountryPage} name="editCountry" />
          <Route path="/countries/{id:Int}" page={CountryCountryPage} name="country" />
          <Route path="/countries" page={CountryCountriesPage} name="countries" />
        </Set>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
