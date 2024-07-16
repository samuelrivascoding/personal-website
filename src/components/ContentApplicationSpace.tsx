import { FunctionComponent } from "react";

export type ContentApplicationSpaceType = {
  className?: string;
};

const ContentApplicationSpace: FunctionComponent<
  ContentApplicationSpaceType
> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start py-0 px-space-2400 ${className}`}
    >
      <div className="self-stretch h-[227px] overflow-hidden shrink-0" />
    </section>
  );
};

export default ContentApplicationSpace;
