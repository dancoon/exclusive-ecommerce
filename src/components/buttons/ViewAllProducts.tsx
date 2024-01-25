import React from "react";
import Button from "../../ui/Button";

interface Props {
  btnName: string;
}

const ViewAllProducts: React.FC<Props> = ({ btnName }) => {
  return (
    <div className="flex justify-center">
      <Button
        name={btnName}
        bgColor="bg-red-secondary"
        textColor="text-white"
      />
    </div>
  );
};

export default ViewAllProducts;
