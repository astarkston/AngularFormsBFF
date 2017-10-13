# Template-driven forms
- Template-driven forms are the normal form build-out
- 2 parts of an Angular form: template (to handle the form UI) and the Component (class to handle user interactions and manage data)
- *Import the FormsModule
  - If the FormsModule is detected, it automagically adds the NgForm directive to any <form> element found in your component's template
- Use ngModel (box of bananas :) ) for data binding
- NgForm requires 'name' attributes on all input elements
## Validation
- ng-touched / ng-untouched; ng-dirty / ng-pristine; ng-valid / ng-invalid
  - Very similar to AngularJS
  - Demonstrate with https://angular.io/guide/template-syntax#ref-vars
- Error messages should be a [hidden] div based on the following expression:
  - formVal.valid || formVal.pristine
- We can do create custom validators to validate against strings, numbers, etc.
  - This is nice if we're taking the rea
## Submitting a form
- Attach an output binding to the form tag for onSubmit. This will fire when the form is submitted, i.e. a button with type="submit" is clicked
# Reactive forms
- Still come from the @angular/forms library, but different module
  - ReactiveFormsModule
  - Create your form object in your TS / JS, bind to your markup
## Reactive vs. template
- Programming approach
- Template-driven forms are asynchronous. Sounds sexy, but it's kind of a pain if you're a) unit testing and need results immediately, or b) need results right away inside of a lifecycle hook, i.e. ngAfterViewInit
## How-to and terminology
- formControl inside formGroup
  - formControl is the form *model*
  - Easy if you model your form model after your data model to set values at one time
- formGroup is the outer control on a wrapping HTML element
  - You can have multiple formGroups, nested formGroups
- Use the FormBuilder class to create your formGroups in code
## Data model to form model
- form.setValue(data) will set data with a one-to-one mapping between data properties and form control names. If no control is found for a data value, it will throw an error: Cannot find form control with name: ${name}.
- form.patchValue looks up a field name inside the current form group. It will set the value for the control only if it's found.
- setValue is safer but difficult / not the best option if you have a huge form or data models that need to be translated
  - If you cannot ensure that data will be properly transferred from the server, or some of the fields are calculation-based, patchValue is a safe bet
- FormArray is for multiple field (or groupings). It does not need names, as it is referenced by index. Great for dynamic fields
  - Confirm email
  - Multiple addresses, i.e. home, work
  - How to create a form array
    1) Create a form group
    2) Refactor form group definition to a buildX() method
    3) Define this.fb.array([buildX()])
    4) Move field (array of values) to a getter to ensure we don't accidentally modify the original value
      return <FormArray>this.form.get('arrayField')
## Changes
- Observe changes through formControl.valueChanges(), formGroup.valueChanges(), or form.valueChanges()
- Reacting to changes: mainly for validation
  - Removes a need for click event in template-driven templates
  - Remove any unneeded code for validation in the markup
# TODOs
- change detection (valueChanges returns observable)
- enter email and confirm https://toddmotto.com/reactive-formgroup-validation-angular-2
