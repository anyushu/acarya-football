import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const ClubTeamForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.clubTeam?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name_en"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name en
        </Label>

        <TextField
          name="name_en"
          defaultValue={props.clubTeam?.name_en}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name_en" className="rw-field-error" />

        <Label
          name="name_ja"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name ja
        </Label>

        <TextField
          name="name_ja"
          defaultValue={props.clubTeam?.name_ja}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name_ja" className="rw-field-error" />

        <Label
          name="date_established"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date established
        </Label>

        <DatetimeLocalField
          name="date_established"
          defaultValue={formatDatetime(props.clubTeam?.date_established)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="date_established" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ClubTeamForm
