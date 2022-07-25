import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'


const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


const LeagueForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.league?.id)
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
          name="level"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Level
        </Label>
        
          <NumberField
            name="level"
            defaultValue={props.league?.level}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="level" className="rw-field-error" />

        <Label
          name="name_en"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name en
        </Label>
        
          <TextField
            name="name_en"
            defaultValue={props.league?.name_en}
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
            defaultValue={props.league?.name_ja}
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
            defaultValue={formatDatetime(props.league?.date_established)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="date_established" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default LeagueForm
