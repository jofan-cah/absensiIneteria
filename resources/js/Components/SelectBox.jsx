export default function SelectBox({ className = '', options, curentValue, ...props }) {

  return (
    <select
      className={className}
      value={curentValue}
      {...props}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          selected={option.value === curentValue}
        >
          {option.label}
        </option>
      ))}
    </select>
  )

}