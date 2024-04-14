import { NewContract as NewContractEvent } from "../generated/Factory/Factory"
import { NewContract } from "../generated/schema"

export function handleNewContract(event: NewContractEvent): void {
  let entity = new NewContract(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contractAddress = event.params.contractAddress
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
