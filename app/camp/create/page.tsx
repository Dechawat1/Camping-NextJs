import { createLankmarkAction } from "@/actions/actions"
import { SubmitButton } from "@/components/ui/form/Buttons"
import CategoryInput from "@/components/ui/form/CategoryInput"
import FormContainer from "@/components/ui/form/FormContainer"
import FormInput from "@/components/ui/form/FormInput"
import ProvinceInput from "@/components/ui/form/ProvinceInput"
import TextAreaInput from "@/components/ui/form/TextAreaInput"


const CreateLankmark = () => {

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Landmark</h1>
      <div className="border p-8 rounded">
        <FormContainer action={createLankmarkAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput name="name"
              label="Landmark Name" type="text"
              placeholder="Enter you Lankmark Name"
              required />

            <CategoryInput />
          </div>
          <TextAreaInput name="description" />
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput name="price"
              label="Price" type="number"
              placeholder="Price"
              required />
              <ProvinceInput/>
          </div>
          
          


          <SubmitButton text="create Landmark" size="lg" />
        </FormContainer>
      </div>


    </section>
  )
}
export default CreateLankmark