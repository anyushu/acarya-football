import LeagueCell from 'src/components/League/LeagueCell'

type LeaguePageProps = {
  id: number
}

const LeaguePage = ({ id }: LeaguePageProps) => {
  return <LeagueCell id={id} />
}

export default LeaguePage
