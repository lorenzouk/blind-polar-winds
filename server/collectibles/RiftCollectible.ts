import { BaseCollectible, CollectibleScoreContext, SpawnValidationContext } from "./BaseCollectible";

export class RiftCollectible extends BaseCollectible {
  protected getSpawnEdgeConstraints(): { minEdge: number; maxEdge: number } {
    return { minEdge: 2, maxEdge: 5 };
  }

  calculateScore(_context: CollectibleScoreContext): number {
    return 0;
  }

  isActivated(_context: CollectibleScoreContext): boolean {
    return false;
  }

  isValidSpawnPosition(context: SpawnValidationContext): boolean {
    const { x, y, minBound, maxBound, existingCollectibles } = context;

    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      return false;
    }

    if (x <= minBound || x >= maxBound || y <= minBound || y >= maxBound) {
      return false;
    }

    for (const other of existingCollectibles) {
      if (other.type === "rift" && other.x === x && other.y === y) {
        return false;
      }
    }

    return true;
  }
}
