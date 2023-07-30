import {Datagrid, DateField, List, NumberField, TextField} from "react-admin";

const Posts = () => {
  return <List>
    <Datagrid
      expand={
        <TextField source="description" label="Описание" sortable={false} />
      }
      bulkActionButtons={false}
      rowClick="edit"
    >
      <NumberField source="id" sortable={false}/>
      <TextField source="title" label="Заголовок" sortable={false} />
      <TextField source="to" label="Ссылка (не обязательно)" sortable={false} />
      <DateField source="updatedAt" label="Дата изменения" sortable={false} />
      <DateField source="createdAt" label="Дата создания" sortable={false} />
    </Datagrid>
  </List>
}

export default Posts