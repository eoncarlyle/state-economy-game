//TODO there is a way to define a `svg` component and define children props but I've forgotten
// How to do this and am on a plane

import { ComponentChild } from "preact";

export default function BaseIcon({
  children,
  className,
}: {
  children: ComponentChild;
  className?: string;
}) {
  return <svg className={className ? className : "icon-svg"}>{children}</svg>;
}
