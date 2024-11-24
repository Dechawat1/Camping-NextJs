
import { Button } from "@/components/ui/button"
import { SubmitButton } from "@/components/ui/form/Buttons"
import FormInput from "@/components/ui/form/FormInput"


const createProfileAction = async (formData: FormData) => {
  'use server'
  const firstName = formData.get('firstName') as string
}



const CreateProfile = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new User</h1>
      <div className="border p-8 rounded">
        <form action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput name="firstname" label="First Name" type="text" placeholder="Enter you First Name" required/>
            <FormInput name="lastname" label="Last Name" type="text" placeholder="Enter you Last Name" required/>
            <FormInput name="username" label="Username" type="text" placeholder="Enter you Username" required/>
            <FormInput name="password" label="Password" type="password" placeholder="Enter you Password" required/>
            <FormInput name="confirmpassword" label="Confirm Password" type="password" placeholder="Enter you Confirm Password" required/>
            <FormInput name="email" label="Email" type="email" placeholder="Enter you Email" required/>
          </div>
          <SubmitButton text="Create Profile" size="lg"/>
        </form>
      </div>


    </section>
  )
}
export default CreateProfile