import { Icon, IconProps } from "./icon.deps.ts"

export function AddIcon(props: IconProps) {
  return <Icon {...props} src="/icons/iconset" icon="add" />;
}
