import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'



const CountryForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.country?.id)
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
            defaultValue={props.country?.name_en}
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
            defaultValue={props.country?.name_ja}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name_ja" className="rw-field-error" />

        <Label
          name="iso_code"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Iso code
        </Label>
        
          <TextField
            name="iso_code"
            defaultValue={props.country?.iso_code}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="iso_code" className="rw-field-error" />

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

export default CountryForm
