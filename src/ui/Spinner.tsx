import { ImSpinner3 } from "react-icons/im";
import classNames from "classnames";

interface Props {
    sm?: boolean,
    md?: boolean,
    lg?: boolean,
}

const Spinner = ({sm, md, lg}: Props) => {
    const classnames = classNames(" animate-spin text-white fill-white mr-2", {
        "w-4 h-4": sm,
        "w-6 h-6": md,
        "w-8 h-8": lg,
    })
  return (
    <div role="status">
          <ImSpinner3 className={classnames} />
          <span className=" sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
