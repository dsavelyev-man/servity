import {useNotify, useRedirect, SaveButton as SaveButtonRC } from "react-admin";

const SaveButton = props => {
  const notify = useNotify();
  const redirect = useRedirect();
  const onSuccess = (response) => {
    notify(`Post "${response.data.title}" saved!`);
    redirect('/posts');
  };
  return <SaveButtonRC {...props}/>;
};

export default SaveButton