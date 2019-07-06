<template>
  <transition appear name="slide">
    <div class="singer-detail"></div>
  </transition>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
import {getSingerDetail, getSongVkey} from 'api/singer'
import {ERR_OK} from 'api/config'
import {createSong} from 'common/js/song'

export default {
  data() {
    return {
      songs: []
    }
  },
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  created() {
    this._getDetail()
  },
  methods: {
    _getDetail() {
      if (!this.singer.id) { // 刷新歌手详情页退回singer界面
        this.$router.push('/singer')
        return
      }
      getSingerDetail(this.singer.id).then((res) => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.data.list)
          console.log(this.songs)
        }
      })
    },
    // _normalizeSongs(list) {
    //   let ret = []
    //   list.forEach((item) => {
    //     let {musicData} = item
    //     if (musicData.songid && musicData.albumid) {
    //       ret.push(createSong(musicData))
    //     }
    //   })
    //   return ret
    // },
    _normalizeSongs(list) {
      let result = []
      list.forEach((item) => {
        // console.log('item',item)
        // 解构赋值-拿到item 下的 musicData 列表数据
        let {musicData} = item
        // ------------- 更新的加上vkey
        getSongVkey(musicData.songmid).then((res) => {
          const vkey = res.data.items[0].vkey
          if (musicData.songid && musicData.albummid) {
            result.push(createSong(musicData, vkey))
          }
        })
        // -------------
        // console.log('musicData',musicData)
        // if(musicData.songid && musicData.albummid){
        //   result.push(CreatSong(musicData))
        // }
      })
      return result
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .singer-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: $color-background

  .slide-enter-active, .slide-leave-active
    transition :all 0.3s

  .slide-enter, .slide-leave-to
    transform :translate3d(100%,0,0)
</style>
