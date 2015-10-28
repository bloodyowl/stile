import autoprefix from "../autoprefix"

tape("autoprefix", (test) => {
  const style = { color: "red" }
  test.notEqual(style, autoprefix(style), "doesn't mutate style")
  test.deepEqual(
    autoprefix({
      transition: "300ms linear all",
    }),
    {
      transition: "300ms linear all",
      WebkitTransition: "300ms linear all",
      MozTransition: "300ms linear all",
      msTransition: "300ms linear all",
    }
  )
  test.deepEqual(
    autoprefix({
      display: "flex",
    }),
    {
      display: "flex;display:-webkit-flex;display:-ms-flexbox",
    }
  )
  test.deepEqual(
    autoprefix({
      flexFlow: "row",
    }),
    {
      flexFlow: "row",
      WebkitFlexFlow: "row",
      msFlexFlow: "row",
    }
  )
  test.deepEqual(
    autoprefix({
      justifyContent: "flex-start",
    }),
    {
      justifyContent: "flex-start",
      WebkitJustifyContent: "flex-start",
      msFlexPack: "start",
    }
  )
  test.deepEqual(
    autoprefix({
      alignItems: "flex-end",
    }),
    {
      alignItems: "flex-end",
      WebkitAlignItems: "flex-end",
      msFlexAlignItems: "end",
    }
  )
  test.end()
})
