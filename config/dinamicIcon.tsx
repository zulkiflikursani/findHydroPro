import dynamic from "next/dynamic";
import { FaRegCircle } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";

// React imports
import type { IconBaseProps } from "react-icons";

type DynamicIconProps = {
  iconFamily: string;
  icon: string;
};

type IconsMapping = {
  [key: string]: React.ComponentType<IconBaseProps>;
};

const DynamicIcon = ({ iconFamily, icon }: DynamicIconProps) => {
  const Icons: IconsMapping = {
    fa: dynamic(
      () =>
        import("react-icons/fa")
          .then((mod) => mod[icon])
          .then((e) => (e === undefined ? FaRegCircle : e)) as Promise<
          React.ComponentType<IconBaseProps>
        >
    ),
    fi: dynamic(
      () =>
        import("react-icons/fi")
          .then((mod) => mod[icon])
          .then((e) => (e === undefined ? FiCircle : e)) as Promise<
          React.ComponentType<IconBaseProps>
        >
    ),
  };

  const Icon = iconFamily && icon ? Icons[iconFamily] : null;

  return <>{Icon && <Icon />}</>;
};

export default DynamicIcon;
