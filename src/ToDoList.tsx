import { useForm } from "react-hook-form";

export function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <>
      <form>
        <input {...register("todo")} type="text" />
        <button>test</button>
      </form>
    </>
  );
}
