import { Record } from 'immutable'

const BulletRecord = Record({
  bulletId: 0 as BulletId,
  // 子弹的方向
  direction: 'up' as Direction,
  // 子弹的速度
  speed: 0,
  // 子弹的位置
  x: 0,
  y: 0,
  /**
   * 子弹的强度 默认强度为1
   * 强度大于等于2的子弹一下子可以破坏两倍的brick-wall
   * 强度为3的子弹可以破坏steel-wall */
  power: 1,
  // 发射子弹的坦克id
  tankId: -1 as TankId,
  // 发射子弹的玩家
  playerName: null as PlayerName,
})

const record = BulletRecord()

type BulletRecord = typeof record

export default BulletRecord
