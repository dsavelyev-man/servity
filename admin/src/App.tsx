import {
  Admin,
  Resource,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./configs/dataProvider";
import { authProvider } from "./configs/authProvider";
import theme from "./configs/theme";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Posts from "./components/lists/Posts";
import {PostsFormCreate, PostsFormEdit} from "./components/forms/PostsForm";
import CustomNotification from "./components/Notification";

export const App = () => (
  <Admin notification={CustomNotification} theme={theme} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="posts"
      options={{
        // label: "Новости"
      }}
      icon={NewspaperIcon}
      list={Posts}
      create={PostsFormCreate}
      edit={PostsFormEdit}
    />
  </Admin>
);
