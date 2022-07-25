import CountryCell from 'src/components/Country/CountryCell'

type CountryPageProps = {
  id: number
}

const CountryPage = ({ id }: CountryPageProps) => {
  return <CountryCell id={id} />
}

export default CountryPage
