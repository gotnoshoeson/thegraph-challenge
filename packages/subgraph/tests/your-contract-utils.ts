import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  GreetingChange,
  Initialized,
  OwnershipTransferred,
  Upgraded
} from "../generated/YourContract/YourContract"

export function createGreetingChangeEvent(
  greetingSetter: Address,
  proxyAddress: Address,
  newGreeting: string,
  value: BigInt
): GreetingChange {
  let greetingChangeEvent = changetype<GreetingChange>(newMockEvent())

  greetingChangeEvent.parameters = new Array()

  greetingChangeEvent.parameters.push(
    new ethereum.EventParam(
      "greetingSetter",
      ethereum.Value.fromAddress(greetingSetter)
    )
  )
  greetingChangeEvent.parameters.push(
    new ethereum.EventParam(
      "proxyAddress",
      ethereum.Value.fromAddress(proxyAddress)
    )
  )
  greetingChangeEvent.parameters.push(
    new ethereum.EventParam(
      "newGreeting",
      ethereum.Value.fromString(newGreeting)
    )
  )
  greetingChangeEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return greetingChangeEvent
}

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}
