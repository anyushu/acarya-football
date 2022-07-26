import { Form, Submit, TextField } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <h1>Contact</h1>
      <Form>
        <TextField name="name" />
        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
