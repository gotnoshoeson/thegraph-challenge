import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { GreetingChange } from "../generated/schema"
import { GreetingChange as GreetingChangeEvent } from "../generated/YourContract/YourContract"
import { handleGreetingChange } from "../src/your-contract"
import { createGreetingChangeEvent } from "./your-contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let greetingSetter = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let proxyAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newGreeting = "Example string value"
    let value = BigInt.fromI32(234)
    let newGreetingChangeEvent = createGreetingChangeEvent(
      greetingSetter,
      proxyAddress,
      newGreeting,
      value
    )
    handleGreetingChange(newGreetingChangeEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("GreetingChange created and stored", () => {
    assert.entityCount("GreetingChange", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "GreetingChange",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "greetingSetter",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "GreetingChange",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "proxyAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "GreetingChange",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newGreeting",
      "Example string value"
    )
    assert.fieldEquals(
      "GreetingChange",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "value",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
