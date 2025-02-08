import { Action, ActionProps } from '@fathym/atomic-design-kit';

type ButtonProps = ActionProps;

export default function Button(props: ButtonProps) {
  return <Action {...props} />;
}
