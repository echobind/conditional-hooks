# readme

```ts
import { type UseHook } form "./useHookShared";
import { useHookOld } from "./useHookOld";
import { useHookNew } from "./useHookNew";

type MyComponentProps = {
  id: string;
  variant?: "default" | "bold",
}

export function MyComponent(props: MyComponentProps) {
  const featureFlag = useFeatureFlag();

  return featureFlag
    ? <MyComponentImplementation key="feature-on" {...props} useHook={useHookNew} />
    : <MyComponentImplementation key="feature-off" {...props} useHook={useHookOld} />
}

type MyComponentImplementationProps = MyComponentProps & {
  useHook: UseHook;
}

function MyComponentImplementation({
  useHook,
  id,
  variant = "default"
}: MyComponentImplementationProps) {
  const result = useHook();

  // ...
};
```
