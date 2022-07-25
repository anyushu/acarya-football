import EditCountryCell from 'src/components/Country/EditCountryCell'

type CountryPageProps = {
  id: number
}

const EditCountryPage = ({ id }: CountryPageProps) => {
  return <EditCountryCell id={id} />
}

export default EditCountryPage
