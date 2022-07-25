import EditClubTeamCell from 'src/components/ClubTeam/EditClubTeamCell'

type ClubTeamPageProps = {
  id: number
}

const EditClubTeamPage = ({ id }: ClubTeamPageProps) => {
  return <EditClubTeamCell id={id} />
}

export default EditClubTeamPage
