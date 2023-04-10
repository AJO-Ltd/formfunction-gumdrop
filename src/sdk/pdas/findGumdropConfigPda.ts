import { PdaResult } from "@formfunction-hq/formfunction-program-shared";
import { PublicKey } from "@solana/web3.js";

export default function findGumdropConfigPda(
  configCreatorAuthority: PublicKey,
  gumdropProgramId: PublicKey
): PdaResult {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("GumdropConfig"), configCreatorAuthority.toBuffer()],
    gumdropProgramId
  );
}
