import { v4 } from "uuid";
export default eventHandler(async (event) => {
  const formData = await readBody(event);
  // console.log(formData);
  // Generate a UUID for the storage item
  const id = v4();
  console.log(
    "Recieved http hook, uploading data with id of: " + id.toString(),
  );
  await useStorage("cosmos").setItem(id, { ...formData, id });
  console.log("Completed Upload");
  return { Id: id };
});
