import { useFormContext } from "react-hook-form";
import { SelectContainer } from "./Select.styles";

interface DataOptions {
  id: string;
  name: string;
}
interface SelectProps {
  width?: number;
  height?: number;
  label: string;
  id: string;
  placeholder?: string;
  errorMessage: string | undefined;
  type?: string;
  data?: DataOptions[];
}

export function Select({
  width = 376,
  height = 72,
  label,
  id,
  placeholder = "",
  errorMessage,
  data,
  ...rest
}: SelectProps) {
  const { register, getValues } = useFormContext();
  return (
    <SelectContainer width={width} height={height}>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...register(id)} value={getValues(id)} {...rest}>
        <>
          <option key="" value="">
            Selecione
          </option>
          {data?.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </>
      </select>
      <span>{errorMessage}</span>
    </SelectContainer>
  );
}
