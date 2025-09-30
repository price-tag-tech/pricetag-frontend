import useToggle from "../../hooks/useToggle"

interface Props {
    value: boolean
    onChange?: (state: boolean) => void
}

const ToggleButton = ({ value, onChange }: Props) => {
    const [state, toggle] = useToggle(value)
    const handleToggle = () => {
        toggle()
        onChange && onChange(!state)
    }


    return (
        <button
            onClick={handleToggle}
            className={`
    relative flex items-center w-12 h-6 px-1 rounded-full shadow-inner transition-colors duration-300
    ${state ? "bg-green-500" : "bg-gray-700"}
  `}
        >
            <div
                className={`
      absolute w-7 h-4 rounded-full shadow-sm transition-all duration-300 ease-in-out left-1 text-[7pt] font-semibold flex items-center justify-center
      ${state ? "translate-x-3 bg-white text-gray-800" : "translate-x-0 bg-gray-500 text-white"}
    `}
            >
                {state ? "ON" : "OFF"}
            </div>
        </button>


    )
}

export default ToggleButton