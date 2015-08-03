import tape from "tape"
import createStyleSheet from "../createStyleSheet"

tape("createStyleSheet", (test) => {
  test.deepEqual(
    createStyleSheet({
      foo: { transform: "rotate(180deg)" },
      bar: { color: "red"}
    }),
    {
      foo: { transform: "rotate(180deg)", WebkitTransform: "rotate(180deg)" },
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
})
