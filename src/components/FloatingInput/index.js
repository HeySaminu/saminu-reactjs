import { ErrorMessage } from "components/ErrorMessage";
import React from "react";

export const FloatingInput = React.forwardRef(
  (
    {
      className,
      name,
      labelClasses,
      wrapperClasses,
      labelText,
      defaultText,
      focusedClasses,
      errors = [],
      onChange,
      ...rest
    },
    ref
  ) => {
    const [value, setValue] = React.useState(defaultText || "");

    function handleChange(e) {
      setValue(e.target.value);
      onChange?.(e.target.value);
    }

    return (
      <div className={`input-container group ${wrapperClasses}`}>
        <input
          ref={ref}
          name={name}
          onChange={handleChange}
          className={`${className}`}
          placeholder=" "
          value={value}
          {...rest}
        />
        <label
          className={`transform group-focus-within:translate-y-[4px] group-focus-within:scale-[0.8] ${labelClasses} ${
            value ? "translate-y-[4px] scale-[0.8]" : focusedClasses
          } `}
        >
          {labelText}
        </label>
        <ErrorMessage errors={errors} />
      </div>
    );
  }
);
