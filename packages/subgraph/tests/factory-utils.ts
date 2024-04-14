import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { NewContract } from "../generated/Factory/Factory"

export function createNewContractEvent(
  contractAddress: Address,
  creator: Address
): NewContract {
  let newContractEvent = changetype<NewContract>(newMockEvent())

  newContractEvent.parameters = new Array()

  newContractEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )
  newContractEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return newContractEvent
}
