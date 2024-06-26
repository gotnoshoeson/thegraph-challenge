// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class NewContract extends ethereum.Event {
  get params(): NewContract__Params {
    return new NewContract__Params(this);
  }
}

export class NewContract__Params {
  _event: NewContract;

  constructor(event: NewContract) {
    this._event = event;
  }

  get contractAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Factory extends ethereum.SmartContract {
  static bind(address: Address): Factory {
    return new Factory("Factory", address);
  }

  implementation(): Address {
    let result = super.call("implementation", "implementation():(address)", []);

    return result[0].toAddress();
  }

  try_implementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "implementation",
      "implementation():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  proxyList(param0: BigInt): Address {
    let result = super.call("proxyList", "proxyList(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return result[0].toAddress();
  }

  try_proxyList(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("proxyList", "proxyList(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  readProxyList(): Array<Address> {
    let result = super.call("readProxyList", "readProxyList():(address[])", []);

    return result[0].toAddressArray();
  }

  try_readProxyList(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "readProxyList",
      "readProxyList():(address[])",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _implementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateProxyCall extends ethereum.Call {
  get inputs(): CreateProxyCall__Inputs {
    return new CreateProxyCall__Inputs(this);
  }

  get outputs(): CreateProxyCall__Outputs {
    return new CreateProxyCall__Outputs(this);
  }
}

export class CreateProxyCall__Inputs {
  _call: CreateProxyCall;

  constructor(call: CreateProxyCall) {
    this._call = call;
  }
}

export class CreateProxyCall__Outputs {
  _call: CreateProxyCall;

  constructor(call: CreateProxyCall) {
    this._call = call;
  }
}
