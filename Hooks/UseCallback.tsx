import { useCallback, memo } from "react";

const UseCallbackComp = (counter: any) => {
  const _getFinal = useCallback(() => {
    console.log("Inside UseCallbackComp ");
  }, [counter]);

  return (
    <>
      <p>Hy i am callback{_getFinal()}</p>
    </>
  );
};

export default memo(UseCallbackComp);
