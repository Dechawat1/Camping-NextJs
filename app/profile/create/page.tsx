import { createProfileAction } from "@/actions/actions"
import { SubmitButton } from "@/components/ui/form/Buttons"
import FormContainer from "@/components/ui/form/FormContainer"
import FormInput from "@/components/ui/form/FormInput"


const CreateProfile = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new User</h1>
      <div className="border p-8 rounded">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput name="firstname" label="First Name" type="text" placeholder="Enter you First Name" required />
            <FormInput name="lastname" label="Last Name" type="text" placeholder="Enter you Last Name" required />
            <FormInput name="username" label="User Name" type="text" placeholder="Enter you Email" required />
          </div>
          <SubmitButton text="Create Profile" size="lg" />
        </FormContainer>
      </div>


    </section>
  )
}
export default CreateProfile