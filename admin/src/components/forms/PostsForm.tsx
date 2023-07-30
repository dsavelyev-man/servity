import {SimpleForm, TextInput, ImageInput, Create, Edit} from "react-admin";
import FormToolbar from "../FormToolbar";

const PostsForm = () => {
  return <SimpleForm toolbar={<FormToolbar/>}>
    <TextInput name="title" source="title" label="Title (min 4, max 64)"/>
    <ImageInput name="image" source="image" />
    <TextInput name="link" source="to" label="Link (optional)" />
    {/*<ImagePreview source="media.filename" secondSource="media" />*/}
    <TextInput
      name="description"
      source="description"
      label="Description (min 16, max 800)"
      multiline
      fullWidth
    />
  </SimpleForm>

}

export const PostsFormCreate = () => {
  return <Create>
    <PostsForm/>
  </Create>
}

export const PostsFormEdit = () => {
  return <Edit>
    <PostsForm/>
  </Edit>
}
