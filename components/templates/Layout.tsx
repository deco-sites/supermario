import { ComponentChildren } from "preact";

export interface Props {
  children: ComponentChildren;
}

export default function Layout(props: Props) {
  return (
    <div class="min-h-screen bg-primary-light text-primary-dark">
      {props.children}
    </div>
  );
}