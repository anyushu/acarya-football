import ClubTeamCell from 'src/components/ClubTeam/ClubTeamCell'

type ClubTeamPageProps = {
  id: number
}

const ClubTeamPage = ({ id }: ClubTeamPageProps) => {
  return <ClubTeamCell id={id} />
}

export default ClubTeamPage
