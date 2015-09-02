import tape from "tape-catch"
import createStyleSheet from "../createStyleSheet"

tape("createStyleSheet", (test) => {
  test.deepEqual(
    createStyleSheet({
      foo: { transform: "rotate(180deg)" },
      bar: { color: "red"}
    }),
    {
      foo: { transform: "rotate(180deg)" },
      bar: { color: "red"}
    }
  )
  test.ok(
    Object.isFrozen(
      createStyleSheet({
        foo: { transform: "rotate(180deg)" },
        bar: { color: "red"}
      })
    )
  )
  test.ok(
    Object.isFrozen(
      createStyleSheet({
        foo: { transform: "rotate(180deg)" },
        bar: { color: "red"}
      }).foo
    )
  )
  test.end()
})
