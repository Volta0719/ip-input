<!--
 * @Author: 24min
 * @Date: 2021-12-04 20:06:28
 * @LastEditors: 24min
 * @LastEditTime: 2021-12-12 14:13:58
 * @FilePath: \ip-input\src\components\ipInput.vue
 * @note: If it ain't broke, don't fix it.🍤
 * @Description: to bo continued...
-->
<template>
  <ul class="fan-ip-addr">
    <li v-for="(item, index) in ip" :key="index" class="fan-ip-item">
      <a-input
        size="small"
        v-model.number="item.value"
        class="fan-ip-input"
        ref="ipInput"
        :maxLength="3"
        @focus.native="focusInput($event, index)"
        @blur.native="blurInput($event, index)"
        @keyup.native="pressKey($event, index, item)"
        @keydown.native="keydown($event, index)"
        @compositionstart="compositionstart($event, index)"
        @compositionend="compositionend($event, index)"
        @change="changeIp($event, index)"
      ></a-input>
      <span class="fan-ip-dot" v-if="index < 3"></span>
    </li>
  </ul>
</template>

<script>
import { Input } from "ant-design-vue";
export default {
  name: "fanIpInput",
  data() {
    return {
      blurIndex: 0, //record the last blur input
      isCodeFoucus: false, // is the code to foucs the input
      shouldLockKeyupEvent: false,
      shouldRemoveText: "",
      ip: [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
      firstFlag: [
        { start: true, end: true },
        { start: true, end: true },
        { start: true, end: true },
        { start: true, end: true },
      ],
    };
  },
  components: {
    aInput: Input,
  },
  props: {
    value: {
      type: String,
      default: "0.0.0.0",
    },
  },
  model: {
    prop: "value",
    event: "result",
  },
  watch: {
    value: {
      immediate: true,
      handler: function (newIp, oldIp) {
        this.ip = [];
        newIp.split(".").forEach((ele) => {
          this.ip.push({ value: ele });
        });
      },
    },
  },
  methods: {
    changeIp(e, index) {
      if (this.shouldRemoveText) {
        const { value } = e.currentTarget;
        const iindex = value.indexOf(this.shouldRemoveText);
        if (iindex >= 0) {
          this.ip[index].value = value.replace(
            new RegExp(this.shouldRemoveText, "g"),
            ""
          );
          this.shouldLockKeyupEvent = false;
          this.shouldRemoveText = "";
        } else {
          console.error(`we didn't match the text in ${index} value😅`);
        }
      } else {
        if (e.currentTarget.selectionStart === 3) {
          this.isCodeFoucus = true;
          this.firstFlag[index === 3 ? 0 : index + 1].start = false;
          this.$refs.ipInput[index === 3 ? 0 : index + 1].focus();
        }
        if (e.currentTarget.selectionStart !== 0) {
          //https://github.com/24min/ip-input/issues/1
          this.firstFlag[index].start = true;
        }
        const resultIp = this.ip.map((ip) => ip.value).join(".");
        this.$emit("result", resultIp);
      }
    },
    // clickIP(e, index) {
    //   console.log("index", e.currentTarget.selectionStart);
    //   // if (this.ip[index].value.length === e.currentTarget.selectionStart) {
    //   //   this.firstFlag[index].end = false;
    //   // } else {
    //   //   this.firstFlag[index].end = true;
    //   // }
    //   // if (e.currentTarget.selectionStart == 0) {
    //   //   this.firstFlag[index].start = false;
    //   // } else {
    //   //   this.firstFlag[index].start = true;
    //   // }
    // },
    focusInput(e, index) {
      if (this.isCodeFoucus) {
        if (index > this.blurIndex) {
          if (index === 3 && this.blurIndex === 0) {
            e.currentTarget.selectionStart =
              this.ip[index].value.toString().length;
            e.currentTarget.selectionEnd =
              this.ip[index].value.toString().length;
          } else {
            e.currentTarget.selectionStart = 0;
            e.currentTarget.selectionEnd = 0;
          }
        } else {
          if (index === 0 && this.blurIndex === 3) {
            e.currentTarget.selectionStart = 0;
            e.currentTarget.selectionEnd = 0;
          } else {
            e.currentTarget.selectionStart =
              this.ip[index].value.toString().length;
            e.currentTarget.selectionEnd =
              this.ip[index].value.toString().length;
          }
        }
        this.isCodeFoucus = false;
      } else {
        setTimeout(() => {
          let currentEvent = this.$refs.ipInput[index].$el;
          if (this.ip[index].value.length === currentEvent.selectionStart) {
            this.firstFlag[index].end = false;
          }
          if (currentEvent.selectionStart == 0) {
            this.firstFlag[index].start = false;
          }
        }, 0);
      }
    },
    blurInput(e, index) {
      //   const value
      const { value } = e.currentTarget;
      if (+value > 255) {
        this.ip[index].value = 255;
      }
      this.blurIndex = index;
      this.firstFlag[index].end = true;
      this.firstFlag[index].start = true;
    },
    keydown(e, index) {
      const allowKey = [
        "Backspace",
        // "Period",
        "ArrowRight",
        "ArrowLeft",
        "Digit1",
        "Digit2",
        "Digit3",
        "Digit4",
        "Digit5",
        "Digit6",
        "Digit7",
        "Digit8",
        "Digit9",
        "Digit0",
      ];
      if (!allowKey.includes(e.code)) {
        e.preventDefault();
      }
    },
    compositionstart(e, index) {
      this.shouldLockKeyupEvent = true;
    },
    compositionend(e, index) {
      this.shouldRemoveText = e.data;
    },
    pressKey(e, index, item) {
      if (this.shouldLockKeyupEvent) return;
      if (e.keyCode === 229) return; // Filtration period(。)
      switch (e.code) {
        case "Backspace":
          if (e.currentTarget.selectionStart === 0) {
            if (!this.firstFlag[index].start) {
              this.isCodeFoucus = true;
              this.firstFlag[index === 0 ? 3 : index - 1].end = false;
              this.$refs.ipInput[index === 0 ? 3 : index - 1].focus();
            } else {
              this.firstFlag[index].start = false;
            }
          } else {
            this.firstFlag[index].start = true;
            this.firstFlag[index].end = true;
          }
          break;
        // case "Enter":
        //   this.isCodeFoucus = true;
        //   this.$refs.ipInput[index === 3 ? 0 : index + 1].focus();
        //   break;
        case "Period":
        case "ArrowRight":
          if (item.value.toString().length === e.currentTarget.selectionStart) {
            if (!this.firstFlag[index].end) {
              this.isCodeFoucus = true;
              this.firstFlag[index === 3 ? 0 : index + 1].start = false;
              this.$refs.ipInput[index === 3 ? 0 : index + 1].focus();
            } else {
              this.firstFlag[index].end = false;
              this.firstFlag[index].start = true;
            }
          } else {
            this.firstFlag[index].end = true;
            this.firstFlag[index].start = true;
          }
          break;
        case "ArrowLeft":
          if (e.currentTarget.selectionStart === 0) {
            if (!this.firstFlag[index].start) {
              this.isCodeFoucus = true;
              // this.firstFlag[index === 0 ? 3 : index - 1].start = false;
              this.firstFlag[index === 0 ? 3 : index - 1].end = false;
              this.$refs.ipInput[index === 0 ? 3 : index - 1].focus();
            } else {
              this.firstFlag[index].start = false;
              this.firstFlag[index].end = true;
            }
          } else {
            this.firstFlag[index].start = true;
            this.firstFlag[index].end = true;
          }
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped lang="less">
.fan-ip-addr {
  display: inline-flex;
  list-style: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 0px 10px;
  justify-content: space-around;
  width: 190px;
  height: 32px;
  & .fan-ip-item {
    line-height: 32px;
    & .fan-ip-dot {
      display: inline-block;
      width: 2px;
      height: 2px;
      background: #9b8d8d;
      border-radius: 50%;
      box-shadow: 0 0 0 1px #fff;
    }
    & .fan-ip-input {
      border: none;
      width: 40px;
      position: relative;
      padding: 3px 8px;
      &:focus {
        box-shadow: none;
      }
    }
  }
}
</style>