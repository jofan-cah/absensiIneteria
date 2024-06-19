export default function SelectBox({ className = '', options, curentValue, ...props }) {

  return (
    <select
      className={
        'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
        className
      }
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