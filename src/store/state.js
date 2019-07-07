import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: false, // 播放暂停状态
  fullScreen: false, // 播放器展开和收起状态
  playlist: [], // 播放列表
  sequenceList: [], // 歌曲列表（顺序的）
  mode: playMode.sequence, // 三种播放模式
  currentIndex: -1 // 当前播放的哪首歌的索引
}

export default state