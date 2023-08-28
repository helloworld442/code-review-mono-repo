import Input from "./Input";

const ReviewInput = ({ name, label, code, error, onInput, onKeyDown, placeholder }) => {
  return (
    <Input label={label}>
      <Input.Content>
        <Input.Code code={code} />
        <Input.Value
          name={name}
          onChange={onInput}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
        />
      </Input.Content>
      <Input.Error error={error} />
    </Input>
  );
};

export { ReviewInput };
