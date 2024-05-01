import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <FontAwesomeIcon
        icon={faSpinner}
        spin
        className="text-[100px] text-gray-500"
      />
    </div>
  );
};

export default Loading;
