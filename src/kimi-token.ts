import { BigInt } from "@graphprotocol/graph-ts"
import { KimiToken, Approval, Transfer } from "../generated/KimiToken/KimiToken"
import { loadOrCreateUser } from "./utils";

export function handleTransfer(event: Transfer): void {

  let sender = loadOrCreateUser(event.transaction.from.toHexString());
  let receiver = loadOrCreateUser(event.params.to.toHexString());

  let amount = event.params.value;
  sender.balance = sender.balance.minus(amount);
  receiver.balance = receiver.balance.plus(amount);

  sender.save();
  receiver.save();

}

// export function handleTransfer(event: Transfer): void {}
