import { myFunction } from "../src"

it("should return 0 when called", () => {
  const result = myFunction()

  expect(result).toBe(0)
})